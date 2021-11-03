const { ApolloServer, gql } = require('apollo-server');
const { BUSINESS } = require('./data/business')
const express = require('express')
const  { createServer } = require('http');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = gql`
  type Payment {
    id: ID
    amount: Int
    currency: String
    date: String
    status: String
  }

  type PaymentRequest {
    id: ID
    note: String
    clientId: String
    businessId: String
    shortCode: String
    transactionId: String
    paymentMethods: Int
    totalAmount: Int
    payments: [Payment]
  }

  type Query {
    allPaymentRequests: [PaymentRequest]
    getPaymentRequestById(id: ID): PaymentRequest
  }

  type Mutation {
    addPaymentToRequest(
      amount: Int
      currency: String
      date: String
      status: String
    ): Payment
  }

  type Subscription {
    paymentCreated: Payment
  }
`;

const resolvers = {
  Query: {
    allPaymentRequests: () => BUSINESS.paymentRequests,
    getPaymentRequestById: (_, { id }) => BUSINESS.paymentRequests.filter(pr => pr.id === id)[0]
  },
  Mutation: {
    addPaymentToRequest: () => {
      BUSINESS.paymentRequests[0].payments.push({
        amount: 7800,
        currency: 'USD',
        date: new Date().toDateString(),
        status: 'created'
      })
    }
  }
};

const app = express()

const httpServer = createServer(app);
const schema = makeExecutableSchema({ typeDefs, resolvers });
const port = 8000;

const server = new ApolloServer({
  schema,
  plugins: [{
    async serverWillStart() {
      return {
        async drainServer() {
          subscriptionServer.close();
        }
      };
    }
  }],
});

const subscriptionServer = SubscriptionServer.create({
  schema,
  execute,
  subscribe,
}, {
  server: httpServer,
  path: server.graphqlPath,
});

server.listen(port, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${port}${subscriptionServer.wsServer.options.path}`,
  );
});
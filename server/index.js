const { ApolloServer, gql } = require('apollo-server');
const { BUSINESS } = require('./data/business')

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
    paymentRequests: [PaymentRequest]
  }
`;

const resolvers = {
  Query: {
    paymentRequests: () => BUSINESS.paymentRequests,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });


server.listen(8000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
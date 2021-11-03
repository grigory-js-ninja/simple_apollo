import { gql } from 'apollo-server';

export const typeDefs = gql`
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
    onPaymentCreated: Payment
  }
`;
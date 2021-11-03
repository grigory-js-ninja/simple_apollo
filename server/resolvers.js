import { BUSINESS } from './data/business.js'
import { pubsub } from './pubsub.js'

export const resolvers = {
  Query: {
    allPaymentRequests: () => BUSINESS.paymentRequests,
    getPaymentRequestById: (_, { id }) => BUSINESS.paymentRequests.filter(pr => pr.id === id)[0]
  },
  Mutation: {
    addPaymentToRequest: () => {
      const payment = {
        amount: 7800,
        currency: 'USD',
        date: new Date().toDateString(),
        status: 'created'
      }
      BUSINESS.paymentRequests[0].payments.push(payment)
      pubsub.publish('PAYMENT_CREATED', { onPaymentCreated: payment });
      return payment
    }
  },
  Subscription: {
    onPaymentCreated: {
      subscribe: () => pubsub.asyncIterator(['PAYMENT_CREATED']),
    },
  },
};

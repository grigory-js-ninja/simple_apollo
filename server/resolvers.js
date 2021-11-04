import { BUSINESS } from './data/business.js'
import { pubsub } from './pubsub.js'

export const resolvers = {
  Query: {
    allPaymentRequests: () => BUSINESS.paymentRequests,
    getPaymentRequestById: (_, { id }) => BUSINESS.paymentRequests.filter(pr => pr.id === id)[0]
  },
  Mutation: {
    addPaymentToRequest: (_, { requestId, amount, date }) => {
      const payment = {
        id: Date.now(),
        amount,
        date,
        currency: 'USD',
        status: 'created'
      }

      BUSINESS.paymentRequests.map(pr => {
        if(pr.id === requestId) {
          pr.payments.push(payment)
        }
      })

      pubsub.publish('PAYMENT_CREATED', { onPaymentCreated: payment });
      return payment
    }
  },
  Subscription: {
    onPaymentCreated: {
      subscribe: () => pubsub.asyncIterator(['PAYMENT_CREATED']),
      resolve: (payload) => {
        return payload.onPaymentCreated;
      },
    },
  },
};

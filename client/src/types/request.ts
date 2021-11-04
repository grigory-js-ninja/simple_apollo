interface IPayment {
  id: string
  amount: number
  currency: string
  date: string
  status: string
}

interface IRequest {
  id: string
  note: string
  clientId: string
  businessId: string
  shortCode: string
  transactionId: string
  paymentMethods: number
  totalAmount: number
  payments: IPayment[]
}


export type { IPayment, IRequest }
import { RequestDetailCard } from './RequestDetailCard.component'
import { gql, useQuery, useSubscription } from '@apollo/client';
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Alert, Spinner} from 'react-bootstrap'

const GET_REQUEST = gql`
  query GetRequestDetails($id: ID) {
    getPaymentRequestById(id: $id) {
      id
      note
      clientId
      businessId
      shortCode
      transactionId
      paymentMethods
      totalAmount
      payments {
        id
        amount
        date
        currency
        status
      }
    }
  }
`;

const ON_PAYMENT_ADD = gql`
  subscription PaymentCreated {
    onPaymentCreated {
      id
      amount
      currency
    }
  }
`


export function Request() {
  const { requestId } = useParams()
  const { loading, error, data, refetch } = useQuery(GET_REQUEST, {
    variables: { id: requestId}
  });
  const { data: subData } = useSubscription(
    ON_PAYMENT_ADD,
  );

  useEffect(() => {
    if (subData) {
      toast(`Payment ${subData.onPaymentCreated.amount} added to: ${data.getPaymentRequestById.id}`)
      refetch()
    }
  }, [subData, refetch])

  return (
    <Container>
      {error && <Alert variant={'danger'}>
       {error.message}
      </Alert>}
      {loading ? <Spinner animation="border" variant="dark" /> : 
        <RequestDetailCard { ...data?.getPaymentRequestById } />
      }
    </Container>
  )
}

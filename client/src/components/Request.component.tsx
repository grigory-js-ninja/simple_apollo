import { RequestDetailCard } from './RequestDetailCard.component'
import { gql, useQuery } from '@apollo/client';
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


export function Request() {
  const { requestId } = useParams()
  const { loading, error, data } = useQuery(GET_REQUEST, {
    variables: { id: requestId}
  });

  return (
    <Container>
      {error && <Alert variant={'danger'}>
       {error.message}
      </Alert>}
      {loading ? <Spinner animation="border" variant="dark" /> : 
        <RequestDetailCard { ...data.getPaymentRequestById } />
      }
    </Container>
  )
}

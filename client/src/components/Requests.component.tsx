import { Container, Spinner, Alert } from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client';
import { RequestCard } from './RequestCard.component'

import { IRequest } from '../types/request'

const GET_REQUESTS = gql`
  query GetRequests {
    allPaymentRequests {
      id
      note
      clientId
      businessId
      shortCode
      transactionId
      paymentMethods
      totalAmount
    }
  }
`;

export function Requests(): JSX.Element {
  const { loading, error, data } = useQuery(GET_REQUESTS);

  return (
    <Container fluid >
      {error && <Alert variant={'danger'}>
       {error.message}
      </Alert>}
      {loading ? <Spinner animation="border" variant="dark" /> : 
        data?.allPaymentRequests?.map((pr: IRequest) => <RequestCard key={pr.id} { ...pr }/>)
      }
    </Container>
  )
}

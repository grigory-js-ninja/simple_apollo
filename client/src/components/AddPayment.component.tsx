import { InputGroup, Container, FormControl, Button, Form, Spinner } from 'react-bootstrap'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const ADD_PAYMENT = gql`
  mutation AddPayment(
    $requestId: ID
    $amount: Int
    $date: String
    ) {
    addPaymentToRequest(
      requestId: $requestId
      amount: $amount
      date: $date
    ) {
      id
    }
  }
`;


export function AddPayment() {
  const { requestId } = useParams()
  const [amount, setAmount] = useState(0)
  const [addPayment, { data, loading, error }] = useMutation(ADD_PAYMENT);
  const navigateTo = useNavigate()

  const onAddPayment = (env: any) => {
    env.preventDefault()
    try {
      addPayment({variables: {
        requestId,
        amount: Number(amount),
        date: new Date().toDateString()
      }})
    } catch {}
  }

  if (data) {
    navigateTo(-1)
  }
  if(error) {
    toast('Something wrong ' + error.message, {
      type: toast.TYPE.ERROR
    })
  }

  const handleChange = (event: any) => {
    setAmount(event.target.value)
  }

  return (
    <Container>
      <Form onSubmit={onAddPayment}>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl aria-label="Dollar amount" onChange={handleChange} value={amount}/>
        </InputGroup>
        <Button type="submit" disabled={loading}>
          {loading 
          ? 
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          : 'Add'}
        </Button>
      </Form>
    </Container>
  )
}

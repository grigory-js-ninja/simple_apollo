import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { IRequest } from '../types/request'

export function RequestDetailCard(props: IRequest) {
  const navigateTo = useNavigate()

  const onAddPayment = () => {
    navigateTo('add-payment')
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.id}</Card.Title>
        <p>Business: {props.businessId}</p>
        <p>Client: {props.clientId}</p>
        <p>Note: {props.note}</p>
        <p>Link: {props.shortCode}</p>
        <p>Total Amount: {props.totalAmount}</p>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {props?.payments?.map((p, idx) => {
          return (
            <ListGroupItem key={p.id}>
              <Card.Title>Paiment #{idx+1}</Card.Title>
              <p>{p.date}</p>
              <p>{p.currency}</p>
              <p>{p.amount}</p>
              <p>{p.status}</p>
            </ListGroupItem>
          )
        })}
      </ListGroup>
      <Button onClick={onAddPayment}>Add Payment</Button>
    </Card>
  )
}

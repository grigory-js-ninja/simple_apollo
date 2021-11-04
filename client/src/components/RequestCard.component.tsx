import { Card, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { IRequest } from '../types/request'

export function RequestCard(props: IRequest): JSX.Element {
  const navigateTo = useNavigate();

  const onRequestClick = (id: string) => {
    navigateTo(`/requests/${id}`)
  }

  return (
    <Card style={{ marginBottom: '20px'}}>
      <Card.Header as="h5">{props.shortCode}</Card.Header>
      <Card.Body>
        <Card.Title>ID: {props.id}</Card.Title>
              <p>note: {props.note}</p>
              <p>paymentMethods: {props.paymentMethods}</p>
              <p>totalAmout: {props.totalAmount}</p>
        <Button variant="primary" onClick={() => onRequestClick(props.id)}>To Request</Button>
      </Card.Body>
    </Card>
  )
}

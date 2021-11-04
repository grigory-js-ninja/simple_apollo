import { Card, Button } from 'react-bootstrap'
import { IRequest } from '../types/request'

export function RequestCard(props: IRequest): JSX.Element {
  return (
    <Card style={{ marginBottom: '20px'}}>
      <Card.Header as="h5">{props.id}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

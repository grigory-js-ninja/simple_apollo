import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { IRequest } from '../types/request'
export function RequestDetailCard(props: IRequest) {
  console.log(props);
  
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.id}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {props.payments.map((p, idx) => {
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
        {/* <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

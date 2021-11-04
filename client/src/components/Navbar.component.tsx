import { Navbar, Container, Nav } from 'react-bootstrap'

export function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Apollo GQL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/requests">Requests</Nav.Link>
          <Nav.Link href="/payments">Payments</Nav.Link>
          <Nav.Link href="/add-payment">Add payment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

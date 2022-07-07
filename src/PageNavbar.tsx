import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const PageNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Ezame</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Works</Nav.Link>
            <NavDropdown title="Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://twitter.com/Ez4meliy">Twitter</NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/channel/UCKw5-ZDiRV4G9EHpvjqEdYA">Youtube</NavDropdown.Item>
              <NavDropdown.Item href="https://soundcloud.com/ezame">SoundCloud</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavbar

import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'

function NavbarComp() {
  const { cart } = useCart()
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">MewStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Burger! */}
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/browse">BROWSE</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart">Cart ({cart.length})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
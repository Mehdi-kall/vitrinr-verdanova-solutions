import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <Navbar bg="transperent" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          Verdanova Solutions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="verdanova-navbar" />
        <Navbar.Collapse id="verdanova-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="#solutions">Solutions</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">À propos</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

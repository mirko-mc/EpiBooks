import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { AllTheBooks } from "./AllTheBooks";
export const MyNav = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
              <NavDropdown title="Genre" id="genre">
                <NavDropdown.Item href="#" onClick={() => AllTheBooks("fantasy")}>Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => AllTheBooks('history')}>History</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => AllTheBooks("horror")}>Horror</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => AllTheBooks("romance")}>Romance</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => AllTheBooks("scifi")}>Scifi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

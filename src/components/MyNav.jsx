import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export const MyNav = ({ setGenre }) => {
  function handleClick(gender) {
    setGenre(gender);
  }
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
                <NavDropdown.Item
                  href="#"
                  onClick={() => handleClick("fantasy")}
                >
                  Fantasy
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  onClick={() => handleClick("history")}
                >
                  History
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  onClick={() => handleClick("horror")}
                >
                  Horror
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  onClick={() => handleClick("romance")}
                >
                  Romance
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => handleClick("scifi")}>
                  Scifi
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

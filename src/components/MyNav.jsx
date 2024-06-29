import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { AllTheBooks } from "./AllTheBooks";
import { useState } from "react";

export const MyNav = () => {
  let [genre, setGenre] = useState("fantasy");
  function handleClick(gender){
    console.log("HANDLECLICK => genre\n",genre);
    console.log("HANDLECLICK => gender\n",gender);
    setGenre(gender);
    console.log("HANDLECLICK => genre\n",genre);
    console.log("HANDLECLICK => gender\n",gender);
    AllTheBooks(genre)
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
                {/* <NavDropdown.Item href="#" onClick={() => AllTheBooks("fantasy")}>Fantasy</NavDropdown.Item> */}
                <NavDropdown.Item href="#" onClick={handleClick("history")}>History</NavDropdown.Item>
                {/* <NavDropdown.Item href="#" onClick={() => AllTheBooks("horror")}>Horror</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => AllTheBooks("romance")}>Romance</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => AllTheBooks("scifi")}>Scifi</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

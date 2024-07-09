import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
export const MyNav = ({ setSearch }) => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#" className="ps-5">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="pe-5 align-items-baseline"
        >
          <Nav className="me-auto">
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <InputGroup className="mb-3 w-50">
            <Form.Control
              placeholder="Search your favourite book"
              aria-label="Search your favourite book"
              aria-describedby="basic-addon2"
              onChange={(event) => setSearch(event.target.value)}
            />
          </InputGroup>
          <Button variant="outline-success">☀🌑</Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

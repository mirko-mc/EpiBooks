import { useContext } from "react";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContextProvider";

export const MyNav = ({ setSearch }) => {
  const { theme, setTheme, useTheme } = useContext(ThemeContext);
  return (
    <Navbar
      expand="md"
      className={useTheme("px-5 bg-dark", "px-5 bg-body-tertiary")}
      data-bs-theme={theme}
    >
      <Navbar.Brand as={Link} to={"/"}>
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="align-items-baseline">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/about"}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to={"/browse"}>
            Browse
          </Nav.Link>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Romance</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Scifi</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Cat5</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form.Control
          className="w-50"
          placeholder="Search your favourite book"
          aria-label="Search your favourite book"
          aria-describedby="basic-addon2"
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button
          variant="outline-success"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "☀" : "🌑"}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

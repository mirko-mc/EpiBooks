import { useContext } from "react";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContextProvider";

export const MyNav = ({ setSearch, setGenre }) => {
  const { theme, setTheme, useTheme } = useContext(ThemeContext);
  return (
    <Navbar
      expand="md"
      className={useTheme("px-5 bg-dark mb-3", "px-5 bg-body-tertiary mb-3")}
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
            <NavDropdown.Item href="#" onClick={() => setGenre("fantasy")}>
              Fantasy
            </NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => setGenre("history")}>
              History
            </NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => setGenre("horror")}>
              Horror
            </NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => setGenre("romance")}>
              Romance
            </NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => setGenre("scifi")}>
              Scifi
            </NavDropdown.Item>
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

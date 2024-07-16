import { useContext } from "react";
import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
// import { ThemeContext } from "../context/Context";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { Link } from "react-router-dom";
export const MyNav = ({ setSearch }) => {
  const { theme, setTheme, useTheme } = useContext(ThemeContext);
  return (
    <Navbar
      expand="lg"
      className={useTheme("px-5 bg-dark", "px-5 bg-body-tertiary")}
      data-bs-theme={theme}
    >
      <Navbar.Brand as={Link} to={"/"}>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="align-items-baseline"
      >
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
          <Nav.Link as={Link} to={"/browse"}>Browse</Nav.Link>
        </Nav>
        <InputGroup className="w-50">
          <Form.Control
            placeholder="Search your favourite book"
            aria-label="Search your favourite book"
            aria-describedby="basic-addon2"
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputGroup>
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

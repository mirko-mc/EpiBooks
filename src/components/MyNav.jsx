import { useContext } from "react";
import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
// import { ThemeContext } from "../context/Context";
import { ThemeContext } from "../context/ThemeContextProvider";
export const MyNav = ({ setSearch }) => {
  const { theme, setTheme, useTheme } = useContext(ThemeContext);
  return (
    <header>
      <Navbar expand="lg" className={useTheme("bg-dark", "bg-body-tertiary")}>
        <Navbar.Brand
          href="#"
          className={useTheme("text-bg-dark ps-5", "text-bg-light ps-5")}
        >
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="pe-5 align-items-baseline"
        >
          <Nav className="me-auto">
            <Nav.Link
              href="#"
              className={useTheme("text-bg-dark", "text-bg-light")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#"
              className={useTheme("text-bg-dark", "text-bg-light")}
            >
              Browse
            </Nav.Link>
          </Nav>
          <InputGroup className="mb-3 w-50">
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
    </header>
  );
};

import { MyNav } from "./components/MyNav/MyNav";
import { MyFooter } from "./components/MyFooter/MyFooter";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { BookDetails } from "./pages/BookDetails";
import { ThemeContext } from "./context/ThemeContextProvider";
import { useContext, useState } from "react";
import { Home } from "./pages/Home";

function App() {
  const { useTheme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      {/* <header className={useTheme("bg-dark text-bg-dark", "bg-light")}> */}
      <header>
        <Container fluid>
          <Row>
            <Col className="p-0">
              <MyNav setSearch={setSearch} />
            </Col>
          </Row>
        </Container>
      </header>

      <main className={useTheme("bg-black text-bg-dark", "bg-light")}>
        <Container>
          <Row>
            <Routes>
              <Route path="/" element={<Home search={search} />} />
              <Route path="/bookdetails/:asin" element={<BookDetails />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="About" element={<About />} />
              <Route path="/*" element={<Navigate to="/404" />} />
            </Routes>
          </Row>
        </Container>
      </main>

      <footer className={useTheme("bg-dark text-bg-dark", "bg-light")}>
        <Container fluid>
          <Row>
            <Col>
              <MyFooter />
            </Col>
          </Row>
        </Container>
      </footer>
    </BrowserRouter>
  );
}

export default App;
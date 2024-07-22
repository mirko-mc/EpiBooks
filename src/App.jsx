import { MyNav } from "./components/MyNav/MyNav";
import { MyFooter } from "./components/MyFooter/MyFooter";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { BookDetails } from "./pages/BookDetails";
import { ThemeContext } from "./context/ThemeContextProvider";
import { useContext, useEffect, useState } from "react";
import { Home } from "./pages/Home";
import Fantasy from "./data/fantasy.json";
import History from "./data/history.json";
import Horror from "./data/horror.json";
import Romance from "./data/romance.json";
import Scifi from "./data/scifi.json";

function App() {
  const { useTheme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("fantasy");
  const [category, setCategory] = useState([]);
  const [itemForPage, setItemForPage] = useState(6);
  useEffect(() => {
    switch (genre) {
      case "fantasy":
        setCategory(Fantasy.slice(itemForPage - 6, itemForPage));
        break;
      case "history":
        setCategory(History.slice(itemForPage - 6, itemForPage));
        break;
      case "horror":
        setCategory(Horror.slice(itemForPage - 6, itemForPage));
        break;
      case "romance":
        setCategory(Romance.slice(itemForPage - 6, itemForPage));
        break;
      case "scifi":
        setCategory(Scifi.slice(itemForPage - 6, itemForPage));
        break;

      default:
        setCategory(Fantasy.slice(itemForPage - 6, itemForPage));
        break;
    }
  }, [genre, itemForPage]);
  const [resultSearch, setResultSearch] = useState(category);

  useEffect(() => {
    const resultTemp = category.filter((book) => {
      return book.title.toLowerCase().includes(search.toLowerCase());
    });
    setResultSearch(resultTemp);
  }, [search, category]);
  return (
    <BrowserRouter>
      <header className={useTheme("bg-black text-bg-dark", "bg-light")}>
        <Container fluid>
          <Row>
            <Col className="p-0">
              <MyNav setSearch={setSearch} setGenre={setGenre} />
            </Col>
          </Row>
        </Container>
      </header>

      <main className={useTheme("bg-black text-bg-dark", "bg-light")}>
        <Container>
          <Row>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    resultSearch={resultSearch}
                    setItemForPage={setItemForPage}
                    itemForPage={itemForPage}
                  />
                }
              />
              <Route
                path="/bookdetails/:asin"
                element={<BookDetails category={category} />}
              />
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

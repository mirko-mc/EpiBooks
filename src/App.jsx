import { MyNav } from "./components/MyNav/MyNav";
import { MyFooter } from "./components/MyFooter/MyFooter";
import { Welcome } from "./components/Welcome";
import { AllTheBooks } from "./pages/AllTheBooks";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
// import { ThemeContext } from "./context/Context";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { BookDetails } from "./pages/BookDetails";

function App() {
  const [search, setSearch] = useState("");

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        {/* <ThemeContext.Provider value={[theme, setTheme, useTheme]}> */}
        <header className="container-fluid">
          <Row>
            <Col className="p-0">
              <MyNav setSearch={setSearch} />
            </Col>
          </Row>
        </header>
        <main className="container">
          <Row>
            <Welcome />
            <Routes>
              <Route path="/" element={<AllTheBooks search={search} />} />
              <Route path="/bookdetails/:asin" element={<BookDetails />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="About" element={<About />} />
              <Route path="/*" element={<Navigate to="/404" />} />
            </Routes>
          </Row>
        </main>
        {/* </ThemeContext.Provider> */}
        <div className="container-fluid">
          <Row>
            <Col className="p-0">
              <MyFooter />
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;

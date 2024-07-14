import { MyNav } from "./components/Header/MyNav";
import { MyFooter } from "./components/Footer/MyFooter";
import { Welcome } from "./components/Welcome";
import { AllTheBooks } from "./components/AllTheBooks/AllTheBooks";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
// import { ThemeContext } from "./context/Context";
import { ThemeContextProvider } from "./context/ThemeContextProvider";

function App() {
  const [search, setSearch] = useState("");

  return (
    <ThemeContextProvider>
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
          <AllTheBooks search={search} />
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
    </ThemeContextProvider>
  );
}

export default App;

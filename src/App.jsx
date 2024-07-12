import { MyNav } from "./components/MyNav";
import { MyFooter } from "./components/MyFooter";
import { Welcome } from "./components/Welcome";
import { AllTheBooks } from "./components/AllTheBooks";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import { useState } from "react";
// import { ThemeContext } from "./context/Context";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import { CommentArea } from "./components/CommentArea";

function App() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [lCol, setLcol] = useState(12);
  function showHideComment() {
    // if () {
      setOpen(!open);
      setLcol(open === false ? 9 : 12);
    // }
  }

  // const [theme, setTheme] = useState("light");
  // const useTheme = (dark, light) => {
  //   if (theme === "dark") return dark;
  //   else return light;
  // };
  return (
    <ThemeContextProvider>
      {/* <ThemeContext.Provider value={[theme, setTheme, useTheme]}> */}
      <MyNav setSearch={setSearch} />
      <Welcome />
      <Container>
        <Row>
          <Col md={lCol} className="d-flex flex-wrap">
            <AllTheBooks search={search} showHideComment={showHideComment} />
          </Col>
          <Collapse in={open}>
            <Col id="cart" md={3}>
              <CommentArea />
              {/* <Cart addCart={addCart} setAddCart={setAddCart} /> */}
            </Col>
          </Collapse>
        </Row>
      </Container>
      {/* </ThemeContext.Provider> */}
      <MyFooter />
    </ThemeContextProvider>
  );
}

export default App;

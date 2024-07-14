import { MyNav } from "./components/MyNav";
import { MyFooter } from "./components/MyFooter";
import { Welcome } from "./components/Welcome";
import { AllTheBooks } from "./components/AllTheBooks";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
// import { ThemeContext } from "./context/Context";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import { CommentArea } from "./components/CommentArea";

function App() {
  const [search, setSearch] = useState("");

  return (
    <ThemeContextProvider>
      {/* <ThemeContext.Provider value={[theme, setTheme, useTheme]}> */}
      <MyNav setSearch={setSearch} />
      <Welcome />
      <Container>
        <Row>
          <AllTheBooks search={search} />
          <CommentArea />
        </Row>
      </Container>
      {/* </ThemeContext.Provider> */}
      <MyFooter />
    </ThemeContextProvider>
  );
}

export default App;

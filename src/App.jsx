import { MyNav } from "./components/MyNav";
import { MyFooter } from "./components/MyFooter";
import { Welcome } from "./components/Welcome";
import { AllTheBooks } from "./components/AllTheBooks";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
// import { ThemeContext } from "./context/Context";
import { ThemeContext } from "./context/ThemeContextProvider";

function App() {
  const [search, setSearch] = useState("");
  // const [theme, setTheme] = useState("light");
  // const useTheme = (dark, light) => {
  //   if (theme === "dark") return dark;
  //   else return light;
  // };
  return (
    <ThemeContext>
      {/* <ThemeContext.Provider value={[theme, setTheme, useTheme]}> */}
      <MyNav setSearch={setSearch} />
      <Welcome />
      <Container>
        <Row>
          <AllTheBooks search={search} />
        </Row>
      </Container>
      {/* </ThemeContext.Provider> */}
      <MyFooter />
    </ThemeContext>
  );
}

export default App;

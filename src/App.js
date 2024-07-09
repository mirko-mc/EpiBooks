import { MyNav } from "./components/MyNav";
import { MyFooter } from "./components/MyFooter";
import { Welcome } from "./components/Welcome";
import { AllTheBooks } from "./components/AllTheBooks";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <MyNav setSearch={setSearch} />
      <Welcome />
      <Container>
        <Row>
          <AllTheBooks search={search} />
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;

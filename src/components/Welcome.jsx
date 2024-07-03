import { Alert, Col, Container, Row } from "react-bootstrap";
import { AllTheBooks } from "./AllTheBooks";
/* il componente WELCOME riceve come props l'oggetto contenente i dati da renderizzare */
export const Welcome = ({ books }) => {
  return (
    <main>
      <Alert variant="primary" dismissible>
        <Alert.Heading>
          Benvenuto tra i libri di SIRENA IMPICCIONA!
        </Alert.Heading>
      </Alert>
      <Container>
        <Row>
          <Col>
            <h1>FAGIOLO by Sirena Impicciona</h1>
          </Col>
        </Row>
        <Row>
          {/** al componente ALLTHEBOOKS gli passo l'oggetto contenente i dati da renderizzare */}
          <AllTheBooks books={books} />
        </Row>
      </Container>
    </main>
  );
};

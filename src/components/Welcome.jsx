import { Alert, Col, Container, Row } from "react-bootstrap";
import { AllTheBooks } from "./AllTheBooks";

export const Welcome = () => {
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
          <AllTheBooks />
        </Row>
      </Container>
    </main>
  );
};

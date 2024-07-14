import { Alert, Col, Container, Row } from "react-bootstrap";
import { AllTheBooks } from "./AllTheBooks/AllTheBooks";

export const Welcome = () => {
  return (
    <>
      <Container>
        <Row>
          <Alert variant="primary" dismissible>
            <Alert.Heading>
              Benvenuto tra i libri di SIRENA IMPICCIONA!
            </Alert.Heading>
          </Alert>
          <Col>
            <h1>FAGIOLO by Sirena Impicciona</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

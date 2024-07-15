import { Alert, Col, Row } from "react-bootstrap";

export const Welcome = () => {
  return (
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
  );
};

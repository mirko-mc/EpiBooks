import {Col, Container, Row} from "react-bootstrap";
export const MyFooter = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="justify-content-center border-top">
            <div>
              <span className="text-muted">
                Sirena Impicciona © 2024 ConLaK
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

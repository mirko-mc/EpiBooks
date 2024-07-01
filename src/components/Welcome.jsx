import { Alert, Button, Col, Collapse, Container, Row } from "react-bootstrap";
import { AllTheBooks } from "./AllTheBooks";
import Cart from "./Cart";
import { useState } from "react";

export const Welcome = () => {
  const [open, setOpen] = useState(false);
  const [lCol, setLcol] = useState(12);
  function showHideCart() {
    setOpen(!open);
    console.log(open);
    setLcol(open === false ? 9 : 12);
  }
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
          <Button
            onClick={() => showHideCart()}
            aria-controls="cart"
            aria-expanded={open}
          >
            click
          </Button>
        </Row>
        <Row>

          <Col md={lCol} className="d-flex flex-wrap">
            <AllTheBooks />
          </Col>
          <Collapse in={open}>
            <Col id="cart" md={3}>
              <Cart />
            </Col>
          </Collapse>

        </Row>
      </Container>
    </main>
  );
};

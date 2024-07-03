import { Alert, Button, Col, Collapse, Container, Row } from "react-bootstrap";
import { AllTheBooks } from "./AllTheBooks";
import Cart from "./Cart";
import { useState } from "react";

export const Welcome = () => {
  const [open, setOpen] = useState(false);
  const [lCol, setLcol] = useState(12);
  const [addCart, setAddCart] = useState("");
  function showHideCart() {
    setOpen(!open);
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
            onClick={showHideCart}
            aria-controls="cart"
            aria-expanded={open}
          >
            click
          </Button>
        </Row>
        <Row>

          <Col md={lCol} className="d-flex flex-wrap">
            <AllTheBooks setAddCart={setAddCart}/>
          </Col>
          <Collapse in={open}>
            <Col id="cart" md={3}>
              {/* <Cart addCart={addCart}/> */}
            </Col>
          </Collapse>

        </Row>
      </Container>
    </main>
  );
};

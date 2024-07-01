import { Button, Card, Col, Row } from 'react-bootstrap';

function CartCard() {
  return (
    <Card>
      <Col md={4}>
        <Card.Img variant="top" src="holder.js/100px180" />
      </Col>
      <Col md={8}>
        <Card.Body>
          <Card.Title>TITOLO LIBRO</Card.Title>
          <Card.Text>PREZZO LIBRO</Card.Text>
          <Button variant="primary"><span className="material-symbols-outlined">
            delete
          </span></Button>
        </Card.Body>
      </Col>
    </Card>
  );
}

export default CartCard;
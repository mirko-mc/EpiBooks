import { Button, Card, Col, Row } from 'react-bootstrap';

function CartCard({ addCart }) {
  return (
    <Card>
      <Col md={4}>
        <Card.Img variant="top" src={addCart.img} />
      </Col>
      <Col md={8}>
        <Card.Body>
          <Card.Title>{addCart.title}</Card.Title>
          <Card.Text>{addCart.price}</Card.Text>
          <Button variant="primary"><span className="material-symbols-outlined">
            remove_shopping_cart
          </span></Button>
        </Card.Body>
      </Col>
    </Card>
  );
}

export default CartCard;
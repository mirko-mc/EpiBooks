import { Button, Card, Col } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";

function CartCard({ book, removeFromCart }) {
  const { useTheme } = useContext(ThemeContext);
  return (
    <Card
      className={useTheme(
        `flex-row bg-dark text-bg-dark}`,
        `flex-row bg-light text-bg-light}`
      )}
    >
      <Col className="d-flex justify-content-center align-items-center" md={4}>
        <Card.Img variant="top" src={book.img} className="h-75" />
      </Col>
      <Col md={8}>
        <Card.Body
          className={useTheme("bg-dark text-bg-dark", "bg-light text-bg-light")}
        >
          <Card.Title className="text-truncate">{book.title}</Card.Title>
          <div className="d-flex justify-content-around">
            <Card.Text>{book.price}€</Card.Text>
            <Button variant="primary" onClick={() => removeFromCart(book.asin)}>
              ✖
            </Button>
          </div>
        </Card.Body>
      </Col>
    </Card>
  );
}

export default CartCard;

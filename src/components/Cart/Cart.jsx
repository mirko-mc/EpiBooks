import Button from "react-bootstrap/Button";
import CartCard from "./CartCard";
import { AlertCustom } from "../AlertCustom";
import { Col, Row } from "react-bootstrap";

function Cart({ addCart, setAddCart, isAdded }) {
  const removeFromCart = (asin) =>
    setAddCart(addCart.filter((book) => book.asin !== asin));
  const totalCart = () => {
    let total = 0.0;
    for (const ITEM of addCart) {
      total += ITEM.price;
    }
    return total;
  };
  return (
    <Row>
      <Col className="d-flex justify-content-between align-items-baseline mb-3">
        <span>{totalCart()}€</span>
        <Button variant="primary" onClick={() => setAddCart([])}>
          Svuota ❌
        </Button>
        <Button variant="primary">Checkout 💸</Button>
      </Col>
      {isAdded && (
        <AlertCustom
          variant={"danger"}
          heading={"Book already added."}
          message={"Book already added."}
        />
      )}
      {addCart.map((book) => (
        <CartCard
          key={"cart" + book.asin}
          book={book}
          removeFromCart={removeFromCart}
        />
      ))}
    </Row>
  );
}

export default Cart;

import Button from "react-bootstrap/Button";
import CartCard from "./CartCard";

function Cart({ addCart, setAddCart }) {
  // console.log("ADDCART", addCart);
  return (
    <>
      <span>TOTALE_COSTO_CARRELLO</span>
      <Button variant="primary" onClick={() => setAddCart([])}>
        Svuota{" "}
        <span className="material-symbols-outlined">shopping_cart_off</span>
      </Button>
      <Button variant="primary">
        Checkout
        <span className="material-symbols-outlined">
          shopping_cart_checkout
        </span>
      </Button>
      {addCart.map((book) => (
        <CartCard
          key={"cart" + book.asin}
          addCart={book}
          setAddCart={setAddCart}
        />
      ))}
      {/* <CartCard addCart={addCart} /> */}
      {/* <CartCard /> */}
    </>
  );
}

export default Cart;
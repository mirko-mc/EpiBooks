import Button from 'react-bootstrap/Button';
import CartCard from './CartCard';

function Cart({ addCart }) {
    return (
        <>
            <span>TOTALE_COSTO_CARRELLO</span>
            <Button variant='primary'>Svuota <span className="material-symbols-outlined">
                shopping_cart_off
            </span></Button>
            <Button variant='primary'>Checkout<span className="material-symbols-outlined">
                shopping_cart_checkout
            </span></Button>
            {/* <CartCard addCart={addCart} /> */}
            {/* <CartCard /> */}
        </>
    );
}

export default Cart;
import Button from 'react-bootstrap/Button';
import CartCard from './CartCard';

function Cart() {

    return (
        <>
            <span>TOTALE_COSTO_CARRELLO</span>
            <Button variant='primary'>Svuota <span class="material-symbols-outlined">
                shopping_cart_off
            </span></Button>
            <Button variant='primary'><span class="material-symbols-outlined">
                shopping_cart_checkout
            </span></Button>
            <CartCard />
            <CartCard />
        </>
    );
}

export default Cart;
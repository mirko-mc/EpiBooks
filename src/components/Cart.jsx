import Button from 'react-bootstrap/Button';
import CartCard from './CartCard';

function Cart() {

    return (
        <>
            <Button variant='primary'>Svuota carello</Button>
            <p>TOTALE_COSTO_CARRELLO</p>
            <CartCard />
        </>
    );
}

export default Cart;
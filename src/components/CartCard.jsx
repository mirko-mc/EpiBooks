import { Button, Card, Col } from 'react-bootstrap';

function CartCard({ addCart, setAddCart }) {
  // console.log(addCart);
  const removeFromCart = (asin)=>{
console.log(asin);
  }
  return (
    <Card className='flex-row'>
      <Col md={4}>
        <Card.Img variant="top" src={addCart.img} />
      </Col>
      <Col md={8}>
        <Card.Body>
          <Card.Title className='text-truncate'>{addCart.title}</Card.Title>
          <Card.Text>{addCart.price}</Card.Text>
          <Button variant="primary" onClick={()=>removeFromCart(addCart.asin)}><span className="material-symbols-outlined">
            remove_shopping_cart
          </span></Button>
        </Card.Body>
      </Col>
    </Card>
  );
}

export default CartCard;
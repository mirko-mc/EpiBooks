import { Button, Col, Card } from "react-bootstrap";
import { useState } from "react";

export const SingleBook = ({ book, addCart, setAddCart }) => {
  // console.log(book);
  // console.log(setAddCart);
  const handleClick = (book) => {
    setAddCart([...addCart, book]);
    // console.log(addCart);
    // console.log(book);
  };
  return (
    <Col md={2}>
      <Card className="mb-3">
        <Card.Img variant="top" src={book.img} height="200px" />
        <Card.Body>
          <Card.Title className="text-truncate">{book.title}</Card.Title>
          <Card.Text>{parseFloat(book.price).toFixed(2)}€</Card.Text>
          <Button variant="primary" onClick={() => handleClick(book)}>
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

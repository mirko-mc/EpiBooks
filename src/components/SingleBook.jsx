import { useState } from "react";
import { Button, Col, Card } from "react-bootstrap";
import "./SingleBook.css";
export const SingleBook = ({ book }) => {
  const [border, setBorder] = useState(false);
  const handleClick = () => {
    setBorder(!border);
  };
  // console.log(book);
  return (
    <Col md={2}>
      <Card
        className={border ? "mb-3 redBorder" : "mb-3 "}
        onClick={handleClick}
      >
        <Card.Img variant="top" src={book.img} height="200px" />
        <Card.Body>
          <Card.Title className="text-truncate">{book.title}</Card.Title>
          <Card.Text>{parseFloat(book.price).toFixed(2)}€</Card.Text>
          <Button variant="primary">Acquista</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

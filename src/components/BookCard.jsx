import { Button, Col, Card } from "react-bootstrap";
export const BookCard = ({ props }) => {
  // console.log(book);
  return (
    <Col md={2}>
      <Card className="mb-3">
        <Card.Img variant="top" src={props.img} height="200px"/>
        <Card.Body>
          <Card.Title className="text-truncate">{props.title}</Card.Title>
          <Card.Text>{parseFloat(props.price).toFixed(2)}€</Card.Text>
          <Button variant="primary">Acquista</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

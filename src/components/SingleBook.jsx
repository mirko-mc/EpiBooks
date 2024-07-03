import { Button, Col, Card } from "react-bootstrap";
export const SingleBook = ({ props }) => {
  return (
    <Col md={2}>
      <Card className="mb-3">
        <Card.Img variant="top" src={props.img} height="200px" />
        <Card.Body>
          <Card.Title className="text-truncate">{props.title}</Card.Title>
          {/** alcuni prezzi hanno una sola cifra decimale. con parseFloat.toFixed(2) gli dò 2 cifre decimali fisse */}
          <Card.Text>{parseFloat(props.price).toFixed(2)}€</Card.Text>
          <Button variant="primary">Acquista</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

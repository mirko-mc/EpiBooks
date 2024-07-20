import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { CommentArea } from "../components/CommentArea/CommentArea";
import { useEffect } from "react";
import { loadComments } from "../data/Fetch";

export const BookDetails = ({ category }) => {
  const navigate = useNavigate();
  const { asin } = useParams();
  const book = category.find((book) => book.asin === asin);
  useEffect(() => {
    if (!book) navigate("/404");
    else loadComments(asin);
  }, []);
  if (book)
    return (
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              className="img-fluid rounded-start h-75 w-75"
              src={book.img}
              alt={book.title}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>PRICE : {book.price}</Card.Text>
              <CommentArea asin={book.asin} />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
};

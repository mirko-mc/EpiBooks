import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { CommentArea } from "../components/CommentArea/CommentArea";
import { useContext, useEffect } from "react";
import { loadComments } from "../data/Fetch";
import { ThemeContext } from "../context/ThemeContextProvider";

export const BookDetails = ({ category }) => {
  const { useTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { asin } = useParams();
  const book = category.find((book) => book.asin === asin);
  console.log(asin);
  useEffect(() => {
    if (!book) navigate("/404");
    else loadComments(asin);
  }, []);
  return (
    <Card
      className={useTheme("bg-dark text-bg-dark", "bg-light text-bg-light")}
    >
      <Row>
        <Card.Title className="text-center">{book.title}</Card.Title>
        <Col md={6}>
          <Card.Img
            className="img-fluid rounded-start"
            src={book.img}
            alt={book.title}
          />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Subtitle>
              <b>DESCRIPTION :</b>{" "}
            </Card.Subtitle>
            <Card.Text>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac ante aliquam, cursus purus sit amet, eleifend turpis. Etiam
                sit amet nibh at orci bibendum laoreet ac vitae felis.
                Vestibulum scelerisque eget lorem sit amet lobortis. Maecenas
                vehicula dolor vitae bibendum suscipit. Aenean interdum semper
                mi ac commodo. Etiam vulputate libero id nulla venenatis mollis.
                Vestibulum ut mattis tortor, at varius orci. Suspendisse a neque
                eget risus commodo suscipit eget vel urna. Sed et tincidunt est.
                Ut venenatis lorem ac tellus tincidunt, a bibendum dolor auctor.
              </p>
            </Card.Text>
            <Card.Text>
              <b>PRICE :</b> {book.price}€
            </Card.Text>
            <CommentArea asin={book.asin} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

import { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContextProvider";
import "./SingleBook.css";

export const SingleBook = ({ book, handleClickSelected, bookSelected }) => {
  const { useTheme } = useContext(ThemeContext);
  const selected = () =>
    bookSelected === book.asin ? "mb-3 redBorder" : "mb-3 border-0";
  return (
    <Col md={4}>
      <Card
        className={useTheme(
          `bg-dark text-bg-dark ${selected()}`,
          `bg-light text-bg-light ${selected()}`
        )}
        data-testid="redBorder"
      >
        <div
          onClick={() => handleClickSelected(book.asin)}
          data-testid="bookCards"
        >
          <Card.Header>
            <Card.Title className="text-truncate">{book.title}</Card.Title>
          </Card.Header>
          <Card.Body
            className={useTheme(
              "bg-dark text-bg-dark",
              "bg-light text-bg-light"
            )}
          >
            <Card.Img variant="top" src={book.img} height="200px" />
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-baseline">
            <Card.Text>Price : {parseFloat(book.price).toFixed(2)}€</Card.Text>
            <Button>🛒</Button>
            <Button
              as={Link}
              to={`/bookdetails/${book.asin}`}
              variant="primary"
            >
              ℹ
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </Col>
  );
};

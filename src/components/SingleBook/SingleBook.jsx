import { useContext } from "react";
import { Button, Col, Card } from "react-bootstrap";
import "./SingleBook.css";
// import { CommentArea } from "./CommentArea";
// import { ThemeContext } from "../context/Context";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { Link } from "react-router-dom";

export const SingleBook = ({ book, handleClickSelected, bookSelected }) => {
  // const [selected, setSelected] = useState(false);
  const { useTheme } = useContext(ThemeContext);
  // const handleClick = () => {
  //   setSelected(!selected);
  // };
  return (
    <Col md={4}>
      <Card className={bookSelected === book.asin ? "mb-3 redBorder" : "mb-3 "}>
        <Card.Img
          variant="top"
          src={book.img}
          height="200px"
          onClick={() => handleClickSelected(book.asin)}
        />
        <Card.Body
          className={useTheme("bg-dark text-bg-dark", "bg-light text-bg-light")}
        >
          <Card.Title className="text-truncate">{book.title}</Card.Title>
          <Card.Text>{parseFloat(book.price).toFixed(2)}€</Card.Text>
          {/* {selected && <CommentArea asin={book.asin} />} */}
          <Button as={Link} to={`/bookdetails/${book.asin}`} variant="primary">
            Book Details ℹ
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

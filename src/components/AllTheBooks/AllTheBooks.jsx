import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { SingleBook } from "./SingleBook";
import { CommentArea } from "../CommentArea/CommentArea";
import Cart from "../Cart/Cart";

export const AllTheBooks = ({ resultSearch, setItemForPage, itemForPage }) => {
  const [addCart, setAddCart] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [bookSelected, setBookSelected] = useState(null);
  const handleClickSelected = (asin) => {
    bookSelected === asin ? setBookSelected(null) : setBookSelected(asin);
  };
  return (
    <>
      <Col>
        <Row>
          {resultSearch.map((b) => (
            <SingleBook
              key={b.asin}
              book={b}
              handleClickSelected={handleClickSelected}
              bookSelected={bookSelected}
              addCart={addCart}
              setAddCart={setAddCart}
              setIsAdded={setIsAdded}
            />
          ))}
        </Row>
      </Col>
      {bookSelected && (
        <Col md={3}>
          <Cart addCart={addCart} setAddCart={setAddCart} isAdded={isAdded} />
          <CommentArea asin={bookSelected} />
        </Col>
      )}
      <Row>
        <Col className="d-flex justify-content-center align-items-baseline">
          <Button
            className="btn btn-primary p-0 fs-5"
            onClick={() => setItemForPage(itemForPage - 6)}
          >
            ◀
          </Button>
          <p className="fs-4 mx-2">{itemForPage / 6}</p>
          <Button
            className="btn btn-primary p-0 fs-5"
            onClick={() => setItemForPage(itemForPage + 6)}
          >
            ▶
          </Button>
        </Col>
      </Row>
    </>
  );
};

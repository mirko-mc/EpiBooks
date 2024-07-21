import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { SingleBook } from "./SingleBook";
import { CommentArea } from "../CommentArea/CommentArea";
import Cart from "../Cart/Cart"


export const AllTheBooks = ({ resultSearch }) => {
  const [addCart, setAddCart] = useState([]);
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
            />
          ))}
        </Row>
      </Col>
      {bookSelected && (
        <Col md={3}>
          <Cart addCart={addCart} setAddCart={setAddCart} />
          <CommentArea asin={bookSelected} />
        </Col>
      )}
    </>
  );
};

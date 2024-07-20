import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { SingleBook } from "./SingleBook";
import { CommentArea } from "../CommentArea/CommentArea";


export const AllTheBooks = ({ resultSearch }) => {
  // stato per il libro da selezionare/deselezionare
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
          <CommentArea asin={bookSelected} />
        </Col>
      )}
    </>
  );
};

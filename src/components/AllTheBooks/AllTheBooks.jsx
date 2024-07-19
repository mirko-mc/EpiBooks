import { useEffect, useState } from "react";
import fantasy from "../../data/fantasy.json";
import { Col, Row } from "react-bootstrap";
import { SingleBook } from "./SingleBook";
import { CommentArea } from "../CommentArea/CommentArea";

export const AllTheBooks = ({ search }) => {
  // stato per la ricerca
  const [resultSearch, setResultSearch] = useState(fantasy);
  // stato per il libro da selezionare/deselezionare
  const [bookSelected, setBookSelected] = useState(null);
  // funzione per selezionare/deselezionare il libro
  const handleClickSelected = (asin) => {
    bookSelected === asin ? setBookSelected(null) : setBookSelected(asin);
  };
  const category = fantasy.slice(0, 6);
  useEffect(() => {
    const resultTemp = category.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setResultSearch(resultTemp);
  }, [search]);

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

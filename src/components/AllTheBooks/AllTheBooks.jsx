import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { SingleBook } from "./SingleBook";
import { CommentArea } from "../CommentArea/CommentArea";
import Fantasy from "../../data/fantasy.json";
import History from "../../data/history.json";
import Horror from "../../data/horror.json";
import Romance from "../../data/romance.json";
import Scifi from "../../data/scifi.json";

export const AllTheBooks = ({ category, setCategory, genre, search }) => {
  // stato per la ricerca
  // funzione per selezionare/deselezionare il libro
  const handleClickSelected = (asin) => {
    bookSelected === asin ? setBookSelected(null) : setBookSelected(asin);
  };
  useEffect(() => {
    switch (genre) {
      case "fantasy":
        setCategory(Fantasy.slice(0, 6));
        break;
      case "history":
        setCategory(History.slice(0, 6));
        break;
      case "horror":
        setCategory(Horror.slice(0, 6));
        break;
      case "romance":
        setCategory(Romance.slice(0, 6));
        break;
      case "scifi":
        setCategory(Scifi.slice(0, 6));
        break;

      default:
        setCategory(Fantasy.slice(0, 6));
        break;
    }
  }, [genre]);
  const [resultSearch, setResultSearch] = useState(category);
  // stato per il libro da selezionare/deselezionare
  const [bookSelected, setBookSelected] = useState(null);
  useEffect(() => {
    const resultTemp = category.filter((book) => {
      return book.title.toLowerCase().includes(search.toLowerCase());
    });
    setResultSearch(resultTemp);
  }, [search, category]);

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

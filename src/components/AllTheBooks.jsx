import { Col, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import { SingleBook } from "./SingleBook";
// import { InputGroup, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { CommentArea } from "./CommentArea";

export const AllTheBooks = ({ search }) => {
  const [bookSelected, setBookSelected] = useState(null);
  const handleClickSelected = (asin) => {
    bookSelected === asin ? setBookSelected(null) : setBookSelected(asin);
  };
  // console.log(fantasy);
  fantasy = fantasy.slice(0, 6);
  // console.log(fantasy.length);
  // const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState(fantasy);
  useEffect(() => {
    const resultsTemp = fantasy.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.asin.includes(search)
    );
    setResultSearch(resultsTemp);
  }, [search]);
  return (
    <>
      <Row>
        <Col md={9}>
          {resultSearch.map((b) => (
            <SingleBook
              key={b.asin}
              book={b}
              handleClickSelected={handleClickSelected}
              bookSelected={bookSelected}
            />
          ))}
        </Col>
        <Col md={3}>
          <CommentArea asin={bookSelected} />
        </Col>
      </Row>
    </>
  );
};

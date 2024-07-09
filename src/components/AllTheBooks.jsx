import fantasy from "../data/fantasy.json";
import { SingleBook } from "./SingleBook";
// import { InputGroup, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const AllTheBooks = ({ search }) => {
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
      {/* <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search your favourite book"
          aria-label="Search your favourite book"
          aria-describedby="basic-addon2"
          onChange={handleSearch}
        />
      </InputGroup> */}
      {resultSearch.map((b) => (
        <SingleBook key={b.asin} book={b} />
      ))}
    </>
  );
};

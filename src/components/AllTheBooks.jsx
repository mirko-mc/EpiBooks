import fantasy from "../data/fantasy.json";
import { SingleBook } from "./SingleBook";
import { InputGroup, Form } from "react-bootstrap";
import { useState } from "react";

export const AllTheBooks = () => {
  // console.log(fantasy);
  fantasy = fantasy.slice(0, 6);
  // console.log(fantasy.length);
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState(fantasy);
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const resultsTemp = fantasy.filter(
      (book) =>
        book.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        book.asin.includes(event.target.value)
    );
    setResultSearch(resultsTemp);
  };
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search your favourite book"
          aria-label="Search your favourite book"
          aria-describedby="basic-addon2"
          onChange={handleSearch}
        />
      </InputGroup>
      {resultSearch.map((b) => (
        <SingleBook key={b.asin} book={b} />
      ))}
    </>
  );
};

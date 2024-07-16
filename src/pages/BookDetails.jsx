import Fantasy from "../data/fantasy.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { CommentArea } from "../components/CommentArea/CommentArea";

export const BookDetails = () => {
  const { asin } = useParams();
  const navigate = useNavigate();
  const book = Fantasy.find((book) => book.asin === asin);
  // useEffect(() => {
  //   if (!book) navigate("/404");
  //   else
  //     fetch(
  //       `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MDU3MjJiNWMyMDAwMTUyNzFmNDEiLCJpYXQiOjE3MjAyNTU4NTgsImV4cCI6MTcyMTQ2NTQ1OH0.n0MajeLZ6MnSCBxed4Q0foGCtYmkizfM1DfOW8f-hhE",
  //         },
  //       }
  //     )
  //       .then((res) => {
  //         if (!res.ok) throw new Error(res.statusText);
  //         return res.json();
  //       })
  //       .then((data) => data())
  //       .catch((err) => err.message === "404" && navigate("/404"))
  //       .finally(() => {});
  // }, []);
  if (book)
    return (
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              className="img-fluid rounded-start h-75 w-75"
              src={book.img}
              alt={book.title}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>PRICE : {book.price}</Card.Text>
              <CommentArea asin={book.asin} />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
};

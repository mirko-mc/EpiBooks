import Fantasy from "../../data/fantasy.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CommentList } from "../CommentArea/CommentList";

export const BookDetails = () => {
  const { asin } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState([]);
  const book = Fantasy.find((book) => book.asin === asin);
  useEffect(() => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MDU3MjJiNWMyMDAwMTUyNzFmNDEiLCJpYXQiOjE3MjAyNTU4NTgsImV4cCI6MTcyMTQ2NTQ1OH0.n0MajeLZ6MnSCBxed4Q0foGCtYmkizfM1DfOW8f-hhE",
        },
      }
    )
      .then((res) => {
        if (res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => setReview(data))
      .catch((err) => err.message === "404" && navigate("/404"))
      .finally(() => {});
  }, []);

  console.log(book);
  if (!book) return navigate("/404");
  return (
    <>
      <h2>Book Details {asin}</h2>
      <img src={book.img} alt={book.title} />
      <p>TITLE : {book.title}</p>
      <p>PRICE : {book.price}</p>
      <CommentList comments={review} />
    </>
  );
};

import { useEffect, useState } from "react";
import { CommentList } from "./CommentList";
import { AddComment } from "./AddComment";

export const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3NDRhNjdmNmI0YjAwMTU0MjhmYzciLCJpYXQiOjE3MjAyMDAyNTUsImV4cCI6MTcyMTQwOTg1NX0.zZibZx8Lb7pxmIuZfS7vIoDYM9jCEZlJOXbMzKHa1vo";
  const loadComments = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: TOKEN,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err))
      .finally(() => console.log("finally"));
  };
  useEffect(() => {
    loadComments();
  }, []);
  return (
    <>
      <AddComment asin={asin} />
      <CommentList comments={comments} />
    </>
  );
};

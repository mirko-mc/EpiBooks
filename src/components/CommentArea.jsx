import { useEffect, useState } from "react";
import { CommentList } from "./CommentList";
import { AddComment } from "./AddComment";
import { loadComments } from "../data/Fetch";

export const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadComments(asin, setComments);
  }, []);
  return (
    <>
      <AddComment asin={asin} />
      <CommentList comments={comments} />
    </>
  );
};

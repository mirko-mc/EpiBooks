import { useEffect, useState } from "react";
import { loadComments } from "../../data/Fetch";
import { AddComment } from "./AddComment";
import { CommentList } from "./CommentList";
import { Loading } from "../Loading";
import { AlertCustom } from "../AlertCustom";

export const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSetComments = async () => {
    setIsLoading(true);
    setComments(await loadComments(asin));
    setIsLoading(false);
  };
  useEffect(() => {
    handleSetComments();
  }, [asin]);
  return (
    <>
    <AlertCustom />
      <AddComment asin={asin} handleSetComments={handleSetComments} />
      {isLoading && <Loading />}
      <CommentList comments={comments} handleSetComments={handleSetComments} />
    </>
  );
};

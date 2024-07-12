import { useEffect, useState } from "react";
import { CommentList } from "./CommentList";
import { AddComment } from "./AddComment";
import { loadComments } from "../data/Fetch";
import { Loading } from "./Loading";
import { AlertError } from "./AlertError";

export const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [editError, setEditError] = useState(false);
  const [delError, setDelError] = useState(false);
  const [updateComments, setUpdateComments] = useState(false);
  useEffect(() => {
    if (updateComments || asin)
      loadComments(
        asin,
        setComments,
        setIsLoading,
        setLoadError,
        setUpdateComments
      );
  }, [asin, updateComments]);

  return (
    <>
      {loadError && (
        <AlertError isError={loadError} setIsError={setLoadError} />
      )}
      {editError && (
        <AlertError isError={editError} setIsError={setEditError} />
      )}
      {delError && <AlertError isError={delError} setIsError={setDelError} />}
      <AddComment
        asin={asin}
        setUpdateComments={setUpdateComments}
        comments={comments}
      />
      {isLoading && <Loading />}
      <CommentList
        comments={comments}
        setEditError={setEditError}
        setUpdateComments={setUpdateComments}
      />
    </>
  );
};

import { useEffect, useState } from "react";
import { loadComments } from "../../data/Fetch";
import { AddComment } from "./AddComment";
import { CommentList } from "./CommentList";
import { Loading } from "../Loading";
import { AlertCustom } from "../AlertCustom";

export const CommentArea = ({ asin }) => {
  const initialAlertState = {
    isAlert: false,
    heading: "",
    message: "",
    variant: "",
  };
  const [inAlert, setInAlert] = useState(initialAlertState);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSetComments = async () => {
    setIsLoading(true);
    setComments([]);
    setComments(
      await loadComments(asin)
        .catch((e) => {
          setInAlert({
            isAlert: true,
            heading: `Error ${e.message}`,
            message: "Loading Error. Try Later",
            variant: "danger",
          })
        })
        .finally(
          setInAlert(initialAlertState)
        )
    );
    setIsLoading(false);
  };
  useEffect(() => {
    handleSetComments();
  }, [asin]);
  return (
    <>
      {inAlert.isAlert && <AlertCustom variant={inAlert.variant} heading={`Error ${inAlert.heading}`} message={inAlert.message} />}
      <AddComment asin={asin} handleSetComments={handleSetComments} />
      {isLoading && <Loading />}
      <CommentList comments={comments} handleSetComments={handleSetComments} />
    </>
  );
};

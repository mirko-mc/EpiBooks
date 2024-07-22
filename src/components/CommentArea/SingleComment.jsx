import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Loading } from "../Loading";
import { delComment, editComment } from "../../data/Fetch";
import { AlertCustom } from "../AlertCustom";

export const SingleComment = ({ comment, handleSetComments }) => {
  const initialAlertState = {
    isAlert: false,
    heading: "",
    message: "",
    variant: "",
  };
  const [inAlert, setInAlert] = useState(initialAlertState);
  const [showSave, setShowSave] = useState(true);
  const [isFetching, setIsFetching] = useState({
    put: false,
    delete: false,
  });
  const [edit, setEdit] = useState({
    comment: comment.comment,
    rate: comment.rate,
  });
  const handleChangeComment = (event) => {
    event.preventDefault();
    setEdit({ ...edit, [event.target.name]: event.target.value });
  };
  const handleSaveEditComment = async (asin) => {
    if (parseInt(edit.rate) < 0 || parseInt(edit.rate) > 5) {
      setInAlert({
        isAlert: true,
        heading: "Rate not valid",
        message: "Rate must be between 0 and 5",
        variant: "danger",
      });
      setTimeout(() => setInAlert(initialAlertState), 3000);
    } else if (edit.comment === "") {
      setInAlert({
        isAlert: true,
        heading: "Comment is empty",
        message: "You forgot to enter the comment.",
        variant: "danger",
      });
      setTimeout(() => setInAlert(initialAlertState), 3000);
    } else {
      setIsFetching({ ...isFetching, put: true });
      await editComment(asin, edit).then(() => {
        setInAlert({
          isAlert: true,
          heading: "Comment edited",
          message: "Comment edited correctly.",
          variant: "success",
        });
      });
      setTimeout(() => setInAlert(initialAlertState), 3000);
      setIsFetching({ ...isFetching, put: false });
      setShowSave(true);
    }
  };
  const handleDeleteComment = async (asin) => {
    setIsFetching({ ...isFetching, delete: true });
    await delComment(asin).catch((e) => {
      setInAlert({
        isAlert: true,
        heading: e.message,
        message: "Deleting Error. Try Later",
        variant: "danger",
      });
    });
    setTimeout(() => setInAlert(initialAlertState), 3000);

    await handleSetComments(asin);
    setIsFetching({ ...isFetching, delete: false });
  };
  return (
    <Form>
      <Form.Group>
        <Form.Label>Recensione di {comment.author}</Form.Label>
        <Form.Control
          type="number"
          name="rate"
          value={edit.rate}
          onChange={handleChangeComment}
          disabled={showSave}
        />
        <Form.Control
          as="textarea"
          rows={3}
          name="comment"
          value={edit.comment}
          onChange={handleChangeComment}
          disabled={showSave}
        />
      </Form.Group>
      {inAlert.isAlert && (
        <AlertCustom
          variant={inAlert.variant}
          heading={inAlert.heading}
          message={inAlert.message}
        />
      )}
      <Button hidden={!showSave} onClick={() => setShowSave(false)}>
        {isFetching.put ? <Loading /> : "🖊"}
      </Button>
      <Button
        hidden={showSave}
        onClick={() => handleSaveEditComment(comment._id)}
      >
        {isFetching.put ? <Loading /> : "💾"}
      </Button>
      <Button onClick={() => handleDeleteComment(comment._id)}>
        {isFetching.delete ? <Loading /> : "🗑"}
      </Button>
    </Form>
  );
};

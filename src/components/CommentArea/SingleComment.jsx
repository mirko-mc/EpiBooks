import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Loading } from "../Loading";
import { delComment, editComment } from "../../data/Fetch";

export const SingleComment = ({ comment, handleSetComments }) => {
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
    if (parseInt(edit.rate) < 0 || parseInt(edit.rate) > 5)
      alert("Rate must be between 0 and 5");
    else {
      setIsFetching({ ...isFetching, put: true });
      await editComment(asin, edit);
      setIsFetching({ ...isFetching, put: false });
      setShowSave(true);
    }
  };
  const handleDeleteComment = async (asin) => {
    setIsFetching({ ...isFetching, delete: true });
    await delComment(asin);
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

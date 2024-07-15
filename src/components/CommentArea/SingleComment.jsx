import { Button, Form } from "react-bootstrap";
import { delComment, editComment } from "../../data/Fetch";
import { Loading } from "../Loading";
import { useState } from "react";

export const SingleComment = ({
  comment,
  setEditError,
  setUpdateComments,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState({
    comment: comment.comment,
    rate: comment.rate,
  });
  const [showSave, setShowSave] = useState(true);
  const handleChangeComment = (event) => {
    event.preventDefault();
    setEdit({ ...edit, [event.target.name]: event.target.value });
  };
  const handleSaveEditComment = (asin, setIsEditing) => {
    if (parseInt(edit.rate) < 0 || parseInt(edit.rate) > 5) setEditError(true);
    else {
      editComment(asin, edit, setIsEditing, setEditError);
      setShowSave(true);
    }
  };
  return (
    <>
          <Form.Control
            type="text"
            name="rate"
            value={edit.rate}
            onChange={handleChangeComment}
            disabled={showSave}
          />
          <Form.Control
            type="text"
            name="comment"
            value={edit.comment}
            onChange={handleChangeComment}
            disabled={showSave}
          />
          <Button hidden={!showSave} onClick={() => setShowSave(false)}>
            {isEditing ? <Loading /> : "🖊"}
          </Button>
          <Button
            hidden={showSave}
            onClick={() => handleSaveEditComment(comment._id, setIsEditing)}
          >
            {isEditing ? <Loading /> : "💾"}
          </Button>
          <Button
            onClick={() => {
              setUpdateComments(true);
              return delComment(comment._id, setIsDeleting, setUpdateComments);
            }}
          >
            {isDeleting ? <Loading /> : "🗑"}
          </Button>
    </>
  );
};

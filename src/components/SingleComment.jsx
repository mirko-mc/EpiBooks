import { Button, Form } from "react-bootstrap";
import { delComment, editComment } from "../data/Fetch";
import { Loading } from "./Loading";
import { useState } from "react";

export const SingleComment = ({
  comment,
  i,
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
    editComment(asin, edit, setIsEditing, setEditError);
    setShowSave(true);
  };
  return (
    <tr>
      <td>{i}</td>
      <td>{comment.author}</td>
      <td>
        <Form.Control
          type="text"
          name="rate"
          value={edit.rate}
          onChange={handleChangeComment}
          disabled={showSave}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          name="comment"
          value={edit.comment}
          onChange={handleChangeComment}
          disabled={showSave}
        />
      </td>
      <td className="text-center">
        <Button hidden={!showSave} onClick={() => setShowSave(false)}>
          {isEditing ? <Loading /> : "🖊"}
        </Button>
        <Button
          hidden={showSave}
          onClick={() => handleSaveEditComment(comment._id, setIsEditing)}
        >
          {isEditing ? <Loading /> : "💾"}
        </Button>
      </td>
      <td className="text-center">
        <Button
          onClick={() => {
            setUpdateComments(true);
            return delComment(comment._id, setIsDeleting, setUpdateComments);
          }}
        >
          {isDeleting ? <Loading /> : "🗑"}
        </Button>
      </td>
    </tr>
  );
};

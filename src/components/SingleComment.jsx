import { ListGroup } from "react-bootstrap";
export const SingleComment = ({ comment }) => {
  return (
    <ListGroup>
      <ListGroup.Item>Author {comment.author}</ListGroup.Item>
      <ListGroup.Item>Rate {comment.rate}</ListGroup.Item>
      <ListGroup.Item>Comment {comment.comment}</ListGroup.Item>
    </ListGroup>
  );
};

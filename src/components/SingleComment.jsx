// import { ListGroup } from "react-bootstrap";
export const SingleComment = ({ comment,i }) => {
  // <ListGroup>
  //   <ListGroup.Item>Author {comment.author}</ListGroup.Item>
  //   <ListGroup.Item>Rate {comment.rate}</ListGroup.Item>
  //   <ListGroup.Item>Comment {comment.comment}</ListGroup.Item>
  // </ListGroup>
  return (
    <tr>
      <td>{i}</td>
      <td>{comment.author}</td>
      <td>{comment.rate}</td>
      <td>{comment.comment}</td>
    </tr>
  );
};
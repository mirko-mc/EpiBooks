import { SingleComment } from "./SingleComment";
import { Table } from "react-bootstrap";

export const CommentList = ({ comments }) => {
  let i = 0;
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th className="text-center text-truncate">Author</th>
          <th className="text-center">Rate</th>
          <th className="text-center">Comment</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} i={++i} />
        ))}
      </tbody>
    </Table >
  )
};

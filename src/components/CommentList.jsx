import { SingleComment } from "./SingleComment";
import { Table } from "react-bootstrap";

export const CommentList = ({ comments, setEditError, setUpdateComments }) => {
  let i = 0;
  return (
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th className="text-center text-truncate">Author</th>
          <th className="text-center">Rate</th>
          <th className="text-center">Comment</th>
          <th className="text-center">Edit</th>
          <th className="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((comment) => (
          <SingleComment
            key={comment._id}
            comment={comment}
            i={++i}
            setEditError={setEditError}
            setUpdateComments={setUpdateComments}
          />
        ))}
      </tbody>
    </Table>
  );
};

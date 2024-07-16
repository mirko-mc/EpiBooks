import { SingleComment } from "./SingleComment";

export const CommentList = ({ comments, setEditError, setUpdateComments }) => {
  return (
    <>
      {comments.map((comment) => (
        <SingleComment
          key={comment._id}
          comment={comment}
          setEditError={setEditError}
          setUpdateComments={setUpdateComments}
        />
      ))}
    </>
  );
};

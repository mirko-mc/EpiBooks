import { SingleComment } from "./SingleComment";

export const CommentList = ({ comments, setEditError, setUpdateComments }) => {
  let i = 0;
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

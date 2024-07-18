import { SingleComment } from "./SingleComment";

export const CommentList = ({ comments, handleSetComments }) => {
  if (!comments[0]) return <p>There aren't any reviews</p>;
  return (
    <>
      {comments.map((comment) => (
        <SingleComment
          key={comment._id}
          comment={comment}
          handleSetComments={handleSetComments}
        />
      ))}
    </>
  );
};

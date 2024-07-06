import { SingleComment } from "./SingleComment";

export const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <SingleComment key={comment._id} comment={comment} />
  ));
};

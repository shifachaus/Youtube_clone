import React from "react";
import { useSelector } from "react-redux";
import CommentsList from "./CommentsList";

const NestedComments = () => {
  const comments = useSelector((store) => store.comment.commentsData);
  return (
    <div>
      <CommentsList comments={comments} />
    </div>
  );
};

export default NestedComments;

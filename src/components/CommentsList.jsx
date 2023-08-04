import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  console.log(comments);
  // Disclaimer: Don't use indexes as keys
  return (
    <div className="p-1">
      {comments?.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;

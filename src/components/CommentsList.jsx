import { useState } from "react";
import Comment from "./Comment";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const CommentsList = ({ comments }) => {
  const [showReplies, setShowReplies] = useState(comments.map(() => false));

  const toggleReplies = (index) => {
    const newShowReplies = [...showReplies];

    newShowReplies[index] = !newShowReplies[index];

    setShowReplies(newShowReplies);
  };

  return (
    <div className="p-1 flex flex-col gap-2">
      {comments?.map((comment, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Comment data={comment} />

          {comment.replies.length > 0 && (
            <div className="pl-5 ml-5">
              <button
                className="text-sky-500 font-medium flex items-center gap-2 hover:bg-sky-950   rounded-full px-4 py-1"
                onClick={() => toggleReplies(index)}
              >
                <span>
                  {showReplies[index] ? <FaCaretUp /> : <FaCaretDown />}
                </span>
                <span className="text-md">
                  {comment.replies.length} replies
                </span>
              </button>
              {showReplies[index] && (
                <CommentsList comments={comment.replies} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;

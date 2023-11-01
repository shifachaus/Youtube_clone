import { useState } from "react";
import Comment from "./Comment";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import CommentInput from "./CommentInput";
const CommentsList = ({ comments }) => {
  const [showReplies, setShowReplies] = useState(comments.map(() => false));
  const [addComments, setAddComments] = useState(comments.map(() => false));

  const toggleReplies = (index) => {
    const newShowReplies = [...showReplies];

    newShowReplies[index] = !newShowReplies[index];

    setShowReplies(newShowReplies);
  };

  const addReplies = (index) => {
    setAddComments((prevComments) => {
      const newComments = [...prevComments];
      newComments[index] = !newComments[index];
      return newComments;
    });
  };

  const cancelReply = (index) => {
    setAddComments((prevComments) => {
      const newComments = [...prevComments];
      newComments[index] = false; // Set it to false to cancel the reply
      return newComments;
    });
  };

  return (
    <div className="p-1 flex flex-col gap-2">
      {comments?.map((comment, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Comment data={comment} />

          <div className=" flex items-center gap-2 pl-5 ml-5">
            <div className="flex items-center ">
              <button className="p-2 rounded-full hover:bg-neutral-700 text-neutral-200  font-medium text-sm  ">
                <AiOutlineLike className="text-xl" />
              </button>
              <span className="text-xs text-neutral-400">11</span>
            </div>
            <button className=" p-2 rounded-full hover:bg-neutral-700  text-neutral-200  font-medium text-sm ">
              <AiOutlineDislike className="text-xl " />
            </button>
            <button
              onClick={() => addReplies(index)}
              className="text-neutral-200 font-medium flex items-center gap-2 hover:bg-neutral-700  rounded-full px-4 py-1 text-sm"
            >
              reply
            </button>
          </div>

          {addComments[index] && (
            <CommentInput
              cancelReply={cancelReply}
              index={index}
              comments={comments}
              comment={comment}
            />
          )}

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

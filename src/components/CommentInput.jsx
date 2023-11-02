import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import UserAvatar from "./UserAvatar";

const CommentInput = ({ cancelReply, index, comments, comment }) => {
  const [commnetReply, setCommentReply] = useState("");

  const addReplyToComment = () => {
    comment.replies.push({
      name: "User",
      text: commnetReply,
      replies: [],
    });

    cancelReply(index);
  };

  return (
    <div className="flex  flex-col gap-2 pl-5 ml-5 overflow-hidden ">
      <div className="flex items-center gap-2 ">
        <BiSolidUserCircle className="text-2xl" />

        <input
          className=" text-sm pb-1 placeholder:text-neutral-400 px-2 w-full border-b border-stone-600 bg-zinc-950"
          placeholder="Add a reply..."
          type="text"
          value={commnetReply}
          onChange={(e) => setCommentReply(e.target.value)}
        />
      </div>
      <div className="flex flex-end justify-end gap-2">
        <button
          onClick={() => cancelReply(index)}
          className="text-neutral-200 font-medium flex items-center gap-2 hover:bg-neutral-700  rounded-full px-3 py-2 text-sm"
        >
          Cancel
        </button>

        <button
          disabled={commnetReply.length == 0}
          className={
            commnetReply.length > 0
              ? `text-black font-medium flex items-center gap-2 bg-sky-500   rounded-full px-3 py-2`
              : "text-white  flex items-center gap-2 bg-neutral-600  opacity-50  rounded-full px-3 py-2"
          }
          onClick={() => addReplyToComment()}
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommentInput;

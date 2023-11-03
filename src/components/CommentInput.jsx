import { useContext, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { useUserContext } from "../context/user_context";
import { useDispatch } from "react-redux";
import { addReplyToComment, cancelReply } from "../utils/commentSlice";
import ThemeContext from "../context/theme_context";

const CommentInput = ({ index, comments, comment }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [commnetReply, setCommentReply] = useState("");
  const { myUser } = useUserContext();

  const dispatch = useDispatch();

  const replyToComment = () => {
    dispatch(
      addReplyToComment({
        index,
        reply: {
          name: myUser?.nickname || myUser?.given_name,
          text: commnetReply,
          replies: [],
        },
      })
    );

    dispatch(cancelReply(index));
  };

  return (
    <div className="flex  flex-col gap-2 pl-5 ml-5 overflow-hidden ">
      <div className="flex items-center gap-2 ">
        <BiSolidUserCircle className="text-2xl" />

        <input
          className={`text-sm pb-1 font-medium placeholder:text-neutral-400 px-2 w-full border-b  ${
            !isDarkTheme
              ? "bg-zinc-950 border-neutral-600"
              : "bg-white border-neutral-300"
          }`}
          placeholder="Add a reply..."
          type="text"
          value={commnetReply}
          onChange={(e) => setCommentReply(e.target.value)}
        />
      </div>
      <div className="flex flex-end justify-end gap-2">
        <button
          onClick={() => dispatch(cancelReply(index))}
          className={` font-medium flex items-center gap-2 ${
            !isDarkTheme
              ? "text-neutral-200 hover:bg-neutral-700"
              : "text-neutral-900 hover:bg-neutral-200"
          }   rounded-full px-3 py-2 text-sm`}
        >
          Cancel
        </button>

        <button
          disabled={commnetReply.length == 0}
          className={
            commnetReply.length > 0
              ? `text-black font-medium flex items-center gap-2 rounded-full px-3 py-2 ${
                  !isDarkTheme
                    ? "bg-sky-600 text-neutral-300 hover:bg-sky-700"
                    : "bg-blue-600 text-neutral-200 hover:bg-blue-700"
                }`
              : `flex items-center gap-2   opacity-50 rounded-full px-3 py-2 ${
                  !isDarkTheme
                    ? "bg-neutral-700 text-neutral-300"
                    : "bg-neutral-200 text-neutral-900"
                }`
          }
          onClick={() => replyToComment()}
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommentInput;

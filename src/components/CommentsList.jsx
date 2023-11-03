import { useContext, useState } from "react";
import Comment from "./Comment";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import CommentInput from "./CommentInput";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddComment, toggleReplies } from "../utils/commentSlice";
import ThemeContext from "../context/theme_context";

const CommentsList = ({ comments }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const showReplies = useSelector((store) => store.comment.showReplies);
  const addReplies = useSelector((store) => store.comment.addReplies);
  console.log(addReplies, "JJJ");

  const dispatch = useDispatch();

  return (
    <div className="p-1 flex flex-col gap-2">
      {comments?.map((comment, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Comment data={comment} />

          <div className=" flex items-center gap-2 pl-5 ml-5">
            <div className="flex items-center ">
              <button
                className={`p-2 rounded-full   font-medium text-sm  ${
                  isDarkTheme
                    ? " text-neutral-900 hover:bg-neutral-200"
                    : " text-neutral-300 hover:bg-neutral-700"
                } `}
              >
                <AiOutlineLike className="text-xl" />
              </button>
              <span className="text-xs ">11</span>
            </div>
            <button
              className={` p-2 rounded-full   font-medium text-sm ${
                isDarkTheme
                  ? " text-neutral-900 hover:bg-neutral-200"
                  : " text-neutral-300 hover:bg-neutral-700"
              } `}
            >
              <AiOutlineDislike className="text-xl " />
            </button>
            <button
              onClick={() => dispatch(toggleAddComment(comment.id))}
              className={` ${
                isDarkTheme
                  ? " text-neutral-900 hover:bg-neutral-200"
                  : " text-neutral-300 hover:bg-neutral-700"
              } font-medium flex items-center gap-2  rounded-full px-4 py-1 text-sm`}
            >
              reply
            </button>
          </div>

          {addReplies[comment.id] && (
            <CommentInput id={comment.id} comment={comment} />
          )}

          {comment.replies.length > 0 && (
            <div className="pl-5 ml-5">
              <button
                className={`${
                  isDarkTheme
                    ? "text-blue-600 hover:bg-sky-100"
                    : "text-sky-500 hover:bg-sky-950"
                }  font-medium flex items-center gap-2   rounded-full px-3 py-[.4rem]`}
                onClick={() => dispatch(toggleReplies(index))}
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

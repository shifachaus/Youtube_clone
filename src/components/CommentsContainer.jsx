import { useContext, useState } from "react";

import { BiSolidUserCircle } from "react-icons/bi";
import { useUserContext } from "../context/user_context";
import { commentsData } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addComment } from "../utils/commentSlice";
import NestedComments from "./NestedComments";
import ThemeContext from "../context/theme_context";
import { v4 as uuidv4 } from "uuid";

const CommentsContainer = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { myUser, loginWithRedirect } = useUserContext();
  const dispatch = useDispatch();

  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState(commentsData);
  const [show, setShow] = useState(false);

  const setAComment = () => {
    dispatch(
      addComment({
        id: uuidv4(),
        name: myUser?.nickname || myUser?.given_name,
        text: commentInput,
        replies: [],
      })
    );

    setShow(false);
  };

  const gotoLoginPage = () => {
    if (!myUser) {
      loginWithRedirect();
    }
  };

  return (
    <div className="mt-4">
      <h1
        className={`text-lg font-bold ${
          isDarkTheme ? "text-neutral-900" : "text-neutral-300"
        } mb-4`}
      >
        {comments?.length} Comments
      </h1>

      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2">
          {!myUser ? (
            <BiSolidUserCircle className="text-4xl" />
          ) : (
            <img
              className="w-8 h-8 rounded-full"
              src={myUser?.picture}
              alt="avatar"
            />
          )}
          <input
            className={`text-sm pb-1 font-medium placeholder:text-neutral-400 px-2 w-full border-b  ${
              !isDarkTheme
                ? "bg-zinc-950 border-neutral-600"
                : "bg-white border-neutral-300"
            }`}
            placeholder="Add a comment..."
            type="text"
            value={commentInput}
            onChange={(e) => {
              setCommentInput(e.target.value), setShow(true);
            }}
            onClick={() => gotoLoginPage()}
          />
        </div>

        {show && (
          <div className="flex flex-end justify-end gap-2">
            <button
              onClick={() => setShow(false)}
              className={` font-medium flex items-center gap-2 ${
                !isDarkTheme
                  ? "text-neutral-200 hover:bg-neutral-700"
                  : "text-neutral-900 hover:bg-neutral-200"
              }   rounded-full px-3 py-2 text-sm`}
            >
              Cancel
            </button>

            <button
              disabled={commentInput.length == 0}
              className={
                commentInput.length > 0
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
              onClick={() => setAComment()}
            >
              Comment
            </button>
          </div>
        )}
      </div>
      <NestedComments />
    </div>
  );
};

export default CommentsContainer;

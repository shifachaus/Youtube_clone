import { useState } from "react";
import CommentsList from "./CommentsList";
import { BiSolidUserCircle } from "react-icons/bi";
import { useUserContext } from "../context/user_context";
import { commentsData } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addComment } from "../utils/commentSlice";
import NestedComments from "./NestedComments";

const CommentsContainer = () => {
  const { myUser, loginWithRedirect } = useUserContext();
  const dispatch = useDispatch();

  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState(commentsData);
  const [show, setShow] = useState(false);

  const setAComment = () => {
    // setComments((prevComments) => [
    //   {
    //     name: myUser?.nickname || myUser?.given_name,
    //     text: commentInput,
    //     replies: [],
    //   },
    //   ...prevComments,
    // ]);

    dispatch(
      addComment({
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
      <h1 className="text-lg font-medium text-neutral-300 mb-4">
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
            className="text-sm pb-1 font-medium placeholder:text-neutral-400 px-2 w-full border-b border-stone-600 bg-zinc-950"
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
              className="text-neutral-200 font-medium flex items-center gap-2 hover:bg-neutral-700  rounded-full px-3 py-2 text-sm"
            >
              Cancel
            </button>

            <button
              disabled={commentInput.length == 0}
              className={
                commentInput.length > 0
                  ? `text-black font-medium flex items-center gap-2 bg-sky-500   rounded-full px-3 py-2`
                  : "text-white  flex items-center gap-2 bg-neutral-600  opacity-50  rounded-full px-3 py-2"
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

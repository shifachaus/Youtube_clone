import { useState } from "react";
import CommentsList from "./CommentsList";
import { BiSolidUserCircle } from "react-icons/bi";

const commentsData = [
  {
    name: "John Doe",
    text: "This is a new comment from John Doe.",
    replies: [
      {
        name: "Alice Smith",
        text: "Reply from Alice Smith to John Doe.",
        replies: [],
      },
      {
        name: "Bob Johnson",
        text: "Reply from Bob Johnson to John Doe.",
        replies: [],
      },
    ],
  },
  {
    name: "Alice Smith",
    text: "Another comment from Alice Smith.",
    replies: [
      {
        name: "Charlie Brown",
        text: "Reply from Charlie Brown to Alice Smith.",
        replies: [],
      },
      {
        name: "David Wilson",
        text: "Reply from David Wilson to Alice Smith.",
        replies: [
          {
            name: "Emily Taylor",
            text: "Reply from Emily Taylor to David Wilson.",
            replies: [
              {
                name: "Frank Davis",
                text: "Reply from Frank Davis to Emily Taylor.",
                replies: [
                  {
                    name: "Grace Harris",
                    text: "Reply from Grace Harris to Frank Davis.",
                    replies: [],
                  },
                ],
              },
              {
                name: "Helen Clark",
                text: "Reply from Helen Clark to Emily Taylor.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Bob Johnson",
    text: "New comment from Bob Johnson.",
    replies: [
      {
        name: "Isabel Lee",
        text: "Reply from Isabel Lee to Bob Johnson.",
        replies: [],
      },
    ],
  },
  {
    name: "David Wilson",
    text: "A comment from David Wilson.",
    replies: [
      {
        name: "John Doe",
        text: "Reply from John Doe to David Wilson.",
        replies: [],
      },
    ],
  },
  {
    name: "Ella White",
    text: "Ella White's comment.",
    replies: [
      {
        name: "Frank Davis",
        text: "Reply from Frank Davis to Ella White.",
        replies: [],
      },
      {
        name: "Grace Harris",
        text: "Reply from Grace Harris to Ella White.",
        replies: [],
      },
      {
        name: "Helen Clark",
        text: "Reply from Helen Clark to Ella White.",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  const [addComment, setAddComments] = useState("");
  const [comments, setComments] = useState(commentsData);
  const [show, setShow] = useState(false);

  const setAComment = () => {
    setComments((prevComments) => [
      {
        name: "User",
        text: addComment,
        replies: [],
      },
      ...prevComments,
    ]);
  };

  return (
    <div className="mt-4">
      <h1 className="text-lg font-medium text-neutral-300 mb-4">
        {" "}
        {comments?.length} Comments
      </h1>

      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2">
          <BiSolidUserCircle className="text-4xl" />

          <input
            className="text-sm pb-1 font-medium placeholder:text-neutral-400 px-2 w-full border-b border-stone-600 bg-zinc-950"
            placeholder="Add a comment..."
            type="text"
            value={addComment}
            onChange={(e) => {
              setAddComments(e.target.value), setShow(true);
            }}
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
              disabled={addComment.length == 0}
              className={
                addComment.length > 0
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
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;

import { useState } from "react";
import CommentsList from "./CommentsList";
import { BiSolidUserCircle } from "react-icons/bi";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  const [addComment, setAddComments] = useState("");

  const setAComment = () => {
    commentsData.push({
      name: "User",
      text: addComment,
      replies: [],
    });

    console.log(commentsData, addComment);
  };

  return (
    <div className="mt-4">
      <h1 className="text-lg font-medium text-neutral-300 mb-4">
        {" "}
        {commentsData.length} Comments
      </h1>

      <div className="flex items-center gap-4 mb-8">
        <BiSolidUserCircle className="text-4xl" />
        <input
          className="text-sm pb-1 font-medium placeholder:text-neutral-400 px-2 w-full border-b border-stone-600 bg-zinc-950"
          placeholder="Add a comment..."
          type="text"
          value={addComment}
          onChange={(e) => setAddComments(e.target.value)}
        />
        <button
          className="text-white  flex items-center gap-2 bg-neutral-600  opacity-50  rounded-full px-3 py-2"
          onClick={() => setAComment()}
        >
          Reply
        </button>
      </div>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

import { BiSolidUserCircle } from "react-icons/bi";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex gap-3">
      <BiSolidUserCircle className="text-4xl" />
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-[14px]">{name}</h3>
        <p className="font-normal text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comment;

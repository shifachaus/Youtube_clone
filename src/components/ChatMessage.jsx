import { BiSolidUserCircle } from "react-icons/bi";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-1 mb-2">
      <BiSolidUserCircle className="text-3xl" />
      <div className="flex gap-3">
        <p className="font-medium text-sm text-neutral-300 ">{name}</p>
        <p className=" text-sm text-neutral-100">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;

import { BiSolidUserCircle } from "react-icons/bi";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-1 mb-2">
      <BiSolidUserCircle className="text-4xl" />
      <p className="font-medium text-sm">{name}</p>
      <p className=" text-sm">{message}</p>
    </div>
  );
};

export default ChatMessage;

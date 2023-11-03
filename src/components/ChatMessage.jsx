import { useContext } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import ThemeContext from "../context/theme_context";

const ChatMessage = ({ name, message }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className="flex items-center gap-2 px-4 py-1 mb-2">
      <BiSolidUserCircle className="text-3xl" />
      <div className="flex gap-3">
        <p
          className={`font-medium text-[14px] ${
            isDarkTheme ? "text-neutral-400" : "text-neutral-300"
          }  `}
        >
          {name}
        </p>
        <p
          className={`font-medium ${
            isDarkTheme ? "text-neutral-500" : "text-neutral-100"
          }  text-[13px] `}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;

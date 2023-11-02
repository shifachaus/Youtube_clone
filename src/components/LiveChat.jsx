import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

import Chat from "./Chat";
import LiveChatLoginButton from "./LiveChatLoginButton";

const LiveChat = () => {
  const messages = useSelector((store) => store.chat.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      //API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(10) + " 🚀",
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const [showChat, setShowChat] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {!showChat ? (
        <button
          onClick={() => setShowChat(true)}
          className="border border-neutral-700  rounded-full w-full hover:bg-neutral-700 cursor-pointer text-center p-[.4rem] text-sm font-medium "
        >
          Show chat
        </button>
      ) : (
        <div className="border border-neutral-700  rounded-lg xl:w-full ">
          <h3 className="border-b border-neutral-700 px-6 py-4">Live chat</h3>
          <div className=" w-full mx-auto px-2 py-4  h-80 lg:h-[340px]  overflow-y-scroll  no-scrollbar flex flex-col-reverse ">
            <div>
              {messages.map((c, i) => (
                <ChatMessage key={i} name={c.name} message={c.message} />
              ))}
            </div>
          </div>

          <div
            className="border-t border-neutral-700 w-full h-28"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered ? <LiveChatLoginButton /> : <Chat />}
          </div>

          <div className="border-t border-neutral-700 p-1">
            <button
              onClick={() => setShowChat(false)}
              className="rounded-full w-full hover:bg-neutral-700 cursor-pointer  p-[.4rem] text-sm font-medium "
            >
              Hide chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;

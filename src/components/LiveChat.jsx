import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/ChatSlice";
import { generateRandomName } from "./utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  console.log(messages);

  useEffect(() => {
    const interval = setInterval(() => {
      //API polling
      console.log(",,");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "hello 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full h-[600px] ml-2  border border-gray-500 bg-gray-950 rounded-lg overflow-y-scroll">
      <h3 className="border-b border-gray-500 p-4">Live chat</h3>

      {messages?.map((message, index) => {
        return (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        );
      })}
    </div>
  );
};

export default LiveChat;

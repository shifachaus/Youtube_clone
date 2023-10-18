import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { BiSolidUserCircle } from "react-icons/bi";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  // console.log(messages);

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

  return (
    <div className="border border-gray-500  rounded-lg">
      <h3 className="border-b border-gray-500 p-4">Live chat</h3>
      <div className="w-full h-[600px] ml-2 p-2  overflow-y-scroll  no-scrollbar flex flex-col-reverse ">
        <div>
          {messages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shifa",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="border-t border-gray-500 py-4 px-4"
      >
        <div className="flex  gap-2 items-center">
          <BiSolidUserCircle className="text-4xl" />
          <p className="text-sm font-medium">Shifa</p>
        </div>
        <div className="flex items-end flex-col">
          <input
            className=" px-2 w-11/12 bg-black border-b border-gray-500 "
            placeholder="Chat..."
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="px-2 mx-2 ">Send</button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;

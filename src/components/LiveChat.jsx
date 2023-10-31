import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
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
    <div className="border border-neutral-700  rounded-lg xl:w-9/12  ">
      <h3 className="border-b border-neutral-700 p-4">Live chat</h3>
      <div className=" w-full lg:h-[340px] p-2  overflow-y-scroll  no-scrollbar flex flex-col-reverse ">
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
        className="border-t border-neutral-700 py-4 px-4"
      >
        <div className="flex flex-col  gap-2 ml-3">
          <div className="flex items-center gap-2">
            <BiSolidUserCircle className="text-3xl" />
            <p className="text-sm text-neutral-300 font-medium ">Shifa</p>
          </div>
          <div className="flex items-end flex-col ">
            <input
              className="text-sm font-medium  text-neutral-400  px-2 w-11/12 bg-black border-b border-neutral-400"
              placeholder="Chat..."
              type="text"
              value={liveMessage}
              onChange={(e) => setLiveMessage(e.target.value)}
            />
            <button className="px-2 mx-2 ">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;

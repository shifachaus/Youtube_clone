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

  const [showChat, setShowChat] = useState(false);

  return (
    <div>
      {!showChat ? (
        <div
          className="border border-neutral-700  rounded-full w-full hover:bg-neutral-700 cursor-pointer"
          onClick={() => setShowChat(true)}
        >
          <p className="text-center p-[.4rem] text-sm font-medium ">
            Show chat
          </p>
        </div>
      ) : (
        <div className="border border-neutral-700  rounded-lg xl:w-full  ">
          <h3 className="border-b border-neutral-700 p-4">Live chat</h3>
          <div className=" w-full h-80 lg:h-[340px] p-2  overflow-y-scroll  no-scrollbar flex flex-col-reverse ">
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
              <div className="flex items-end flex-col ml-8">
                <input
                  className="text-sm font-medium  text-neutral-400  px-2 w-full bg-black border-b border-neutral-400"
                  placeholder="Chat..."
                  type="text"
                  value={liveMessage}
                  onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button className="px-2 mx-2 ">Send</button>
              </div>
            </div>
          </form>
          <div className="border-t border-neutral-700 p-1">
            <div
              className="border border-neutral-700   rounded-full w-full hover:bg-neutral-700 cursor-pointer"
              onClick={() => setShowChat(false)}
            >
              <p className="text-center p-[.4rem] text-sm font-medium ">
                Hide chat
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;

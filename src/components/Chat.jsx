import { useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { useDispatch } from "react-redux";

const Chat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  return (
    <form
      className={` w-full mx-auto px-3 py-3`}
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
    >
      <div className="flex flex-col  gap-2 ml-3">
        <div className="flex items-center gap-2">
          <BiSolidUserCircle className="text-3xl" />
          <p className="text-sm text-neutral-300 font-medium">Shifa</p>
        </div>
        <div className="flex items-end flex-col ml-8">
          <input
            className="text-sm font-medium text-neutral-400 px-2 w-full bg-black border-b border-neutral-400"
            placeholder="Chat..."
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="px-2 mx-2">Send</button>
        </div>
      </div>
    </form>
  );
};

export default Chat;

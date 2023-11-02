import { useState } from "react";
import { VscSend } from "react-icons/vsc";
import { addMessage } from "../utils/chatSlice";
import { useDispatch } from "react-redux";
import { useUserContext } from "../context/user_context";

const Chat = () => {
  const { myUser } = useUserContext();
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  return (
    <form
      className={` w-full mx-auto px-3 py-3 mt-2`}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addMessage({
            name: myUser?.nickname || myUser?.given_name,
            message: liveMessage,
          })
        );
        setLiveMessage("");
      }}
    >
      <div className="flex flex-col  gap-2 ml-3">
        {myUser && (
          <div className="flex items-center  gap-2">
            <img
              className="w-8 h-8 rounded-full"
              src={myUser?.picture}
              alt="avatar"
            />
            <p className="text-sm text-neutral-400 font-medium">
              {myUser?.nickname || myUser?.given_name}
            </p>
          </div>
        )}
        <div className="flex items-end flex-col ml-8 gap-2">
          <input
            className="text-sm font-medium text-neutral-400 placeholder:text-neutral-400 px-2 w-full bg-black border-b border-neutral-400"
            placeholder="Chat..."
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <span className=" mx-2">
            <VscSend className="text-2xl text-neutral-400 " />
          </span>
        </div>
      </div>
    </form>
  );
};

export default Chat;

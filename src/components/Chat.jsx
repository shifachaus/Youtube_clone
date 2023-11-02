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
      className={` w-full mx-auto px-3 py-3 `}
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
        <div className="flex items-center  gap-2">
          {myUser && (
            <img
              className="w-8 h-8 rounded-full"
              src={myUser?.picture}
              alt="avatar"
            />
          )}
          <p className="text-sm text-neutral-200 font-medium">
            {myUser?.nickname || myUser?.given_name}
          </p>
        </div>

        <div className="flex items-end flex-col ml-8 gap-2">
          <input
            className="text-sm font-medium text-neutral-200 placeholder:text-neutral-200 px-2 w-full bg-black border-b border-neutral-400"
            placeholder="Chat..."
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />

          <div className="flex items-center">
            <p
              className={
                liveMessage.length > 150 && liveMessage.length <= 180
                  ? "text-[.8rem] text-yellow-500"
                  : liveMessage.length > 180 && liveMessage.length <= 200
                  ? "text-[.8rem] text-orange-500"
                  : liveMessage.length > 200
                  ? "text-[.8rem] text-red-600"
                  : "text-[.8rem] text-neutral-400"
              }
            >
              {liveMessage.length}/200
            </p>
            <button
              disabled={liveMessage.length === 0}
              type="submit"
              className=" mx-2"
            >
              <VscSend
                className={
                  liveMessage.length > 0 && liveMessage.length <= 200
                    ? "text-2xl text-neutral-400"
                    : `text-2xl text-neutral-600 `
                }
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Chat;

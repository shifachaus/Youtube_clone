import { useUserContext } from "../context/user_context";
import { CiLogout } from "react-icons/ci";
import { closePopup } from "../utils/appSlice";
import { useDispatch } from "react-redux";
const Popup = () => {
  const { myUser, logout } = useUserContext();
  const dispatch = useDispatch();
  const handleToggle = () => {
    logout({ resizeTo: window.location.origin });
    dispatch(closePopup());
  };
  return (
    <div
      id="info-popup"
      tabIndex="-1"
      className=" overflow-y-auto overflow-x-hidden fixed top-0  right-12"
    >
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div className="relative  rounded-lg shadow-lg bg-zinc-800  ">
          <div className=" flex gap-4 border-b items-center p-4  border-neutral-600">
            <img
              className="w-10 h-10 rounded-full"
              src={myUser?.picture}
              alt="avatar"
            />
            <div>
              <p className=" text-md text-white">{myUser?.name}</p>
              <p className="text-md text-white">@{myUser?.nickname}</p>
            </div>
          </div>
          <div className=" flex gap-4 items-center   p-4  ">
            <CiLogout className="w-6 h-6" />
            <div>
              <button
                onClick={() => handleToggle()}
                className="text-white  text-sm"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

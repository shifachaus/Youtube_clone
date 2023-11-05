import { useDispatch, useSelector } from "react-redux";
import { useUserContext } from "../context/user_context";
import Popup from "./Popup";
import { togglePopup } from "../utils/appSlice";
import { RxDotsVertical } from "react-icons/rx";
import LoginButton from "./LoginButton";

const UserAvatar = () => {
  const { myUser } = useUserContext();
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(togglePopup());
  };

  const isPopupOpen = useSelector((store) => store.app.isPopupOpen);

  return (
    <div className="flex items-center gap-1">
      {!myUser ? (
        <div className="flex items-center gap-1">
          <span className="p-2 ">
            <RxDotsVertical
              className="text-md sm:text-xl cursor-pointer "
              onClick={handleToggle}
            />
          </span>

          <LoginButton />
        </div>
      ) : (
        <img
          className="w-8 h-8 rounded-full"
          src={myUser?.picture}
          alt="avatar"
          onClick={handleToggle}
        />
      )}

      {isPopupOpen && <Popup />}
    </div>
  );
};

export default UserAvatar;

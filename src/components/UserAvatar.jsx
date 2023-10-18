import { useDispatch, useSelector } from "react-redux";
import { useUserContext } from "../context/user_context";
import Popup from "./Popup";
import { togglePopup } from "../utils/appSlice";

const UserAvatar = () => {
  const { myUser } = useUserContext();
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(togglePopup());
  };

  const isPopupOpen = useSelector((store) => store.app.isPopupOpen);

  return (
    <div>
      <img
        className="w-8 h-8 rounded-full"
        src={myUser?.picture}
        alt="avatar"
        onClick={handleToggle}
      />

      {isPopupOpen && <Popup />}
    </div>
  );
};

export default UserAvatar;

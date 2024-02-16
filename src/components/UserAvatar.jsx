import { useDispatch, useSelector } from "react-redux";
import { RxDotsVertical } from "react-icons/rx";
import { togglePopup } from "../utils/appSlice";
import useSignInWithGoogle from "../hooks/useSignInWithGoogle";
import useSignOutAndClosePopup from "../hooks/useSignOutAndClosePopup";
import Popup from "./Popup";
import LoginButton from "./LoginButton";

const UserAvatar = () => {
  const dispatch = useDispatch();
  const signInWithGoogle = useSignInWithGoogle();
  const signOutAndClosePopup = useSignOutAndClosePopup();

  const user = useSelector((store) => store.user?.user);

  const handleSignIn = async () => {
    signInWithGoogle();
  };
  const handleSignOut = async () => {
    signOutAndClosePopup();
  };

  const handleToggle = () => {
    dispatch(togglePopup());
  };

  const isPopupOpen = useSelector((store) => store.app.isPopupOpen);
  const isUserEmpty = !user || (Array.isArray(user) && user.length === 0);

  return (
    <div className="flex items-center gap-1">
      {isUserEmpty ? (
        <div className="flex items-center gap-1">
          <span className="p-2 ">
            <RxDotsVertical
              className="text-md sm:text-xl cursor-pointer "
              onClick={handleToggle}
            />
          </span>

          <LoginButton signInWithGoogle={handleSignIn} />
        </div>
      ) : (
        <img
          className="w-8 h-8 rounded-full"
          src={user?.profilePhoto}
          alt="avatar"
          onClick={handleToggle}
        />
      )}

      {isPopupOpen && <Popup signOutAndClosePopup={handleSignOut} />}
    </div>
  );
};

export default UserAvatar;

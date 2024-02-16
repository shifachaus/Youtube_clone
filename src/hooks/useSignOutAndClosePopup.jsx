import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { clearUser } from "../utils/userSlice";
import { closePopup } from "../utils/appSlice";
import { auth } from "../utils/firebase";

const useSignOutAndClosePopup = () => {
  const dispatch = useDispatch();

  const handleSignOutAndClosePopup = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
    } catch (err) {
      console.error(err);
    }
    dispatch(closePopup());
  };

  return handleSignOutAndClosePopup;
};

export default useSignOutAndClosePopup;

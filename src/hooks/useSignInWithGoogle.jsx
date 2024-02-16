import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";

const useSignInWithGoogle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, provider);
      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };
      dispatch(setUser(authInfo));
    } catch (error) {
      console.error("Error signing in with Google:", error);
      // Handle error if needed
    }
  };

  return signInWithGoogle;
};

export default useSignInWithGoogle;

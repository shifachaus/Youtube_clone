import { FaRegUserCircle } from "react-icons/fa";
import { useUserContext } from "../context/user_context";
import { useContext } from "react";
import ThemeContext from "../context/theme_context";

const LoginButton = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { loginWithRedirect, myUser } = useUserContext();
  // console.log(myUser);
  return (
    <div
      className={` flex gap-2 items-center  border  px-2 py-1 md:py-[0.3rem] md:px-[0.8rem]   ${
        isDarkTheme
          ? "border-neutral-200 hover:bg-sky-100 hover:border-sky-100"
          : "border-neutral-700 hover:bg-sky-950 hover:border-sky-950"
      }   rounded-full cursor-pointer`}
    >
      <span>
        <FaRegUserCircle
          className={` ${
            isDarkTheme ? "text-blue-600 " : "text-sky-500 "
          } text-xl `}
        />
      </span>
      <button
        onClick={loginWithRedirect}
        className={`${
          isDarkTheme ? "text-blue-600 " : "text-sky-500 "
        } font-medium text-md tracking-tighter`}
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginButton;

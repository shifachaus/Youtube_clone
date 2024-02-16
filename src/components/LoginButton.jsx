import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../context/theme_context";

const LoginButton = ({ signInWithGoogle }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={` flex gap-1 items-center  border  px-[.4rem] py-1 md:py-[0.3rem] md:px-[0.8rem]   ${
        isDarkTheme
          ? "border-neutral-200 hover:bg-sky-100 hover:border-sky-100"
          : "border-neutral-700 hover:bg-sky-950 hover:border-sky-950"
      }   rounded-full cursor-pointer`}
    >
      <span>
        <FaRegUserCircle
          className={` ${
            isDarkTheme ? "text-blue-600 " : "text-sky-500 "
          } text-md sm:text-xl `}
        />
      </span>
      <button
        onClick={signInWithGoogle}
        className={`${
          isDarkTheme ? "text-blue-600 " : "text-sky-500 "
        } font-medium text-xs sm:text-[14px] tracking-tighter`}
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginButton;

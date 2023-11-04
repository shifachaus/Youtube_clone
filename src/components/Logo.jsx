import { ImYoutube2 } from "react-icons/im";
import { Link } from "react-router-dom";
import ThemeContext from "../context/theme_context";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useContext } from "react";

const Logo = ({ style }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className={`flex gap-4  col-span-1 items-center ${style} `}>
      <span
        onClick={() => handleToggle()}
        className={`${
          !isDarkTheme ? "hover:bg-stone-900" : "hover:bg-neutral-200 "
        }   rounded-full p-2`}
      >
        <RxHamburgerMenu className="text-xl cursor-pointer " />
      </span>

      <Link to="/">
        <ImYoutube2 className="col-span-2 w-20 h-8" />
      </Link>
    </div>
  );
};

export default Logo;

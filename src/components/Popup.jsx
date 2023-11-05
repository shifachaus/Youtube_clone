import { useUserContext } from "../context/user_context";
import { CiLogout } from "react-icons/ci";
import { closePopup } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import ThemeContext from "../context/theme_context";
import { HiOutlineMoon, HiMoon } from "react-icons/hi2";

const Popup = () => {
  const { myUser, logout } = useUserContext();

  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  // console.log(isDarkTheme, "lll");

  const dispatch = useDispatch();
  const handleToggle = () => {
    logout({ resizeTo: window.location.origin });
    dispatch(closePopup());
  };

  return (
    <div
      id="info-popup"
      tabIndex="-1"
      className={` overflow-y-auto overflow-x-hidden fixed top-7  ${
        myUser ? "right-8" : "right-20 sm:right-24"
      }`}
    >
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div
          className={`relative  rounded-lg shadow-lg ${
            !isDarkTheme ? "bg-zinc-800" : "bg-neutral-100 text-black"
          }  `}
        >
          {myUser && (
            <div
              className={`flex gap-4 border-b items-center p-4  ${
                !isDarkTheme ? "border-neutral-600" : "border-neutral-200"
              }`}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={myUser?.picture}
                alt="avatar"
              />
              <div>
                <p className=" text-md ">{myUser?.name}</p>
                <p className="text-md ">@{myUser?.nickname}</p>
              </div>
            </div>
          )}
          {myUser && (
            <div
              className={`flex gap-4 border-b items-center p-4  ${
                !isDarkTheme ? "border-neutral-600" : "border-neutral-200"
              }`}
            >
              <CiLogout className="w-6 h-6" />
              <div>
                <button onClick={() => handleToggle()} className="  text-sm">
                  Sign out
                </button>
              </div>
            </div>
          )}

          <div
            className=" flex gap-4 items-center   p-4  "
            onClick={() => {
              toggleTheme(), dispatch(closePopup());
            }}
          >
            {!isDarkTheme ? (
              <div className=" flex gap-4 items-center   sm:p-2  ">
                <HiMoon className="text-xl" />
                <p>Appearance: Dark theme</p>
              </div>
            ) : (
              <div className=" flex gap-4 items-center   sm:p-2  ">
                <HiMoon className="text-xl" />
                <p>Appearance: Light theme</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

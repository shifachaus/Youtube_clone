import { CiLogout } from "react-icons/ci";
import { HiMoon } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { closePopup } from "../utils/appSlice";
import ThemeContext from "../context/theme_context";

const Popup = ({ signOutAndClosePopup }) => {
  const user = useSelector((store) => store.user.user);

  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  return (
    <div
      id="info-popup"
      tabIndex="-1"
      className={` overflow-y-auto overflow-x-hidden fixed top-7  ${
        user?.isAuth ? "right-8" : "right-20 sm:right-24"
      }`}
    >
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div
          className={`relative  rounded-lg shadow-lg ${
            !isDarkTheme ? "bg-zinc-800" : "bg-neutral-100 text-black"
          }  `}
        >
          {user?.isAuth && (
            <div
              className={`flex gap-4 border-b items-center p-4  ${
                !isDarkTheme ? "border-neutral-600" : "border-neutral-200"
              }`}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={user?.profilePhoto}
                alt="avatar"
              />
              <div>
                <p className=" text-md ">{user?.name}</p>
              </div>
            </div>
          )}
          {user?.isAuth && (
            <div
              className={`flex gap-4 border-b items-center p-4  ${
                !isDarkTheme ? "border-neutral-600" : "border-neutral-200"
              }`}
            >
              <CiLogout className="w-6 h-6" />
              <div>
                <button onClick={signOutAndClosePopup} className="  text-sm">
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

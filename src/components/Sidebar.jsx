import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleMenu } from "../utils/appSlice";
import logo from "../../public/yt-logo.png";
import home from "../../public/home.png";
import shorts from "../../public/shorts.png";
import subscription from "../../public/subscriptions.png";
import library from "../../public/library.png";
import history from "../../public/history.png";
import settings from "../../public/settings.png";
import report from "../../public/report.png";
import unknown from "../../public/unknown.png";
import movie from "../../public/movies.png";
import music from "../../public/music.png";
import live from "../../public/wave.png";
import game from "../../public/game.png";
import {
  IoBagHandleOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineBulb, AiOutlineFire, AiFillYoutube } from "react-icons/ai";
import { PiCoatHanger } from "react-icons/pi";
import LoginButton from "./LoginButton";
import { useUserContext } from "../context/user_context";
import { useContext } from "react";
import ThemeContext from "../context/theme_context";
import { GoHomeFill } from "react-icons/go";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineLiveTv,
} from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import {
  PiMusicNoteThin,
  PiFilmSlate,
  PiGameControllerThin,
  PiFlagThin,
} from "react-icons/pi";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { SiYoutubemusic } from "react-icons/si";
import { ImYoutube2 } from "react-icons/im";
import { CiYoutube } from "react-icons/ci";
const Sidebar = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { myUser } = useUserContext();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <section
      className={`${isMenuOpen ? "col-span-1 w-60 h-full px-3   " : "hidden"} `}
    >
      <aside
        aria-label="Sidebar"
        className={`fixed top-0 left-0 z-40 w-60 transition-transform overflow-x-hidden    ${
          !isDarkTheme
            ? "bg-stone-950 text-neutral-200"
            : "bg-white text-neutral-800 "
        }  ${isMenuOpen ? "translate-x-0 " : "-translate-x-full"} `}
      >
        <div className="flex gap-4  col-span-1 items-center px-6 py-2">
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
        <div
          className="flex flex-col gap-2 py-1   px-2 hover:h-screen  overflow-y-auto overflow-x-hidden"
          style={{
            "--primary": isDarkTheme ? "#fff" : "rgba(9, 9, 11, 1)",
            "--secondary": isDarkTheme
              ? "rgb(166, 166, 166)"
              : "rgb(110, 110, 110)",
          }}
        >
          <ul
            className={`border-b flex flex-col   py-2     ${
              !isDarkTheme ? "border-neutral-600 " : "border-neutral-601  "
            } `}
          >
            <Link to="/">
              <li
                className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                  !isDarkTheme
                    ? "bg-zinc-800 hover:bg-neutral-700 "
                    : "bg-neutral-100 hover:bg-neutral-200 "
                }`}
              >
                <GoHomeFill className="col-span-2 text-xl" />

                <p className="font-medium text-[.9rem] col-span-10"> Home</p>
              </li>
            </Link>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <CiYoutube className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Shorts</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <MdOutlineSubscriptions className="col-span-2 text-xl" />

              <p className=" text-[.9rem] col-span-10"> Subscriptions</p>
            </li>
          </ul>

          <ul
            className={`border-b flex flex-col   py-2     ${
              !isDarkTheme ? "border-neutral-600 " : "border-neutral-601  "
            } `}
          >
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <MdOutlineVideoLibrary className="col-span-2 text-xl" />

              <p className=" text-[.9rem]    col-span-10">Library</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <VscHistory className="col-span-2 text-xl" />

              <p className="text-[.9rem]   col-span-10">History</p>
            </li>
          </ul>

          {!myUser && (
            <ul
              className={`border-b flex flex-col   py-2  px-5    ${
                !isDarkTheme ? "border-neutral-600 " : "border-neutral-601  "
              } `}
            >
              <li className="text-md mb-2 flex flex-col items-start gap-4 ">
                <p>Sign in to like videos, comment, and subscribe.</p>
                <LoginButton />
              </li>
            </ul>
          )}

          <ul
            className={`border-b flex flex-col   py-2     ${
              !isDarkTheme ? "border-neutral-600 " : "border-neutral-601  "
            } `}
          >
            <h3 className="font-medium text-md mb-2 px-5 ">Explore</h3>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <AiOutlineFire className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Trending</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <IoBagHandleOutline className="col-span-2 text-xl" />

              <p className=" text-[.9rem] col-span-10"> Shopping</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <PiMusicNoteThin className="col-span-2 text-xl" />

              <p className=" text-[.9rem] col-span-10"> Music</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <PiFilmSlate className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Movies</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <MdOutlineLiveTv className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Live</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <PiGameControllerThin className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Gaming</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <BsNewspaper className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> News</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <AiOutlineBulb className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Learning</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <PiCoatHanger className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Fashion & beauty</p>
            </li>
          </ul>

          <ul className="border-b border-neutral-600 flex flex-col  py-2">
            <h3 className="font-medium text-md mb-2 px-5">More from YouTube</h3>

            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <AiFillYoutube className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> YouTube Premium</p>
            </li>

            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <SiYoutubemusic className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> YouTube Music</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <TbBrandYoutubeKids className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> YouTube Kids</p>
            </li>
          </ul>

          <ul
            className={`border-b flex flex-col   py-2     ${
              !isDarkTheme ? "border-neutral-600 " : "border-neutral-601  "
            } `}
          >
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <IoSettingsOutline className="col-span-2 text-xl" />

              <p className=" text-[.9rem] col-span-10"> Settings</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <PiFlagThin className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Report history</p>
            </li>
            <li
              className={`grid grid-flow-col gap-6  px-5 py-2 rounded-md   ${
                !isDarkTheme
                  ? " hover:bg-neutral-700 "
                  : " hover:bg-neutral-200 "
              }`}
            >
              <IoHelpCircleOutline className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Help</p>
            </li>
          </ul>

          <div className="flex flex-col pb-10">
            <p className="text-sm text-neutral-500 px-5 py-2">
              Lorem Ipsum is a type of placeholder text used in the printing and
              typesetting industry.
            </p>
            <p className="text-sm text-neutral-500 px-5 py-2">
              It's often used as a temporary filler text when the actual
            </p>

            <p className="text-sm text-neutral-500 px-5 py-2"> Lorem Ipsum</p>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Sidebar;

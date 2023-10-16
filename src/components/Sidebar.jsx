import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleMenu } from "./utils/appSlice";
import logo from "../assets/yt-logo.png";
import home from "../assets/home.png";
import shorts from "../assets/short.png";
import { FaRegUserCircle } from "react-icons/fa";
import subscription from "../assets/subscriptions.png";
import library from "../assets/library.png";
import history from "../assets/history.png";
import settings from "../assets/settings.png";
import report from "../assets/report.png";
import unknown from "../assets/unknown.png";
import movie from "../assets/Movie.png";
import music from "../assets/music.png";
import live from "../assets/Wave.png";
import game from "../assets/game.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineBulb, AiOutlineFire } from "react-icons/ai";
import { PiCoatHanger } from "react-icons/pi";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);

  return (
    <section className={`${isMenuOpen && "col-span-1 w-60 h-full px-3   "} `}>
      <aside
        aria-label="Sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform overflow-y-auto no-scrollbar bg-stone-950  ${
          isMenuOpen ? "translate-x-0 " : "-translate-x-full"
        } `}
      >
        <div className="flex flex-col gap-2 py-1   px-2">
          <div className="flex gap-2 md:gap-4 col-span-1 items-center px-2 py-1">
            <span
              onClick={() => handleToggle()}
              className="hover:bg-stone-900 rounded-full p-2"
            >
              <RxHamburgerMenu className="text-xl cursor-pointer text-stone-100" />
            </span>

            <Link to="/">
              <img className="w-24 " src={logo} alt="logo" />
            </Link>
          </div>

          <ul className="border-b flex flex-col border-neutral-600  py-2">
            <Link to="/">
              <li className="grid grid-flow-col gap-6 hover:bg-neutral-700 px-5 py-2 rounded-md bg-zinc-800">
                <img src={home} alt="logo" className="col-span-2" />
                <p className="font-medium text-[.9rem] col-span-10"> Home</p>
              </li>
            </Link>
            <li className="grid grid-flow-col gap-6  px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={shorts} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> Shorts</p>
            </li>
            <li className="grid grid-flow-col gap-6 mb-4  px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={subscription} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> Subscriptions</p>
            </li>
          </ul>

          <ul className="border-b border-neutral-600 flex flex-col  py-2">
            <li className="grid grid-flow-col gap-6  px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={library} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem]    col-span-10">Library</p>
            </li>
            <li className="grid grid-flow-col gap-6  px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={history} alt="logo" className="col-span-2" />
              <p className="text-[.9rem]   col-span-10">History</p>
            </li>
          </ul>

          <ul className="border-b border-neutral-600 flex flex-col items-start gap-4 px-5 py-2 ">
            <li className="text-md">
              Sign in to like videos, comment, and subscribe.
            </li>
            <div className="flex gap-2 justify-center items-center  border border-neutral-700 py-[0.4rem] px-[0.8rem] hover:border-sky-950 hover:bg-sky-950   rounded-full cursor-pointer mb-2">
              <span>
                <FaRegUserCircle className="text-sky-500  text-xl " />
              </span>
              <p className="text-sky-500 font-medium text-md tracking-tighter">
                Sign in
              </p>
            </div>
          </ul>

          <ul className="border-b border-neutral-600 flex flex-col  py-2">
            <h3 className="font-medium text-md mb-2 px-5 ">Explore</h3>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <AiOutlineFire className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Trending</p>
            </li>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <IoBagHandleOutline className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Shopping</p>
            </li>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={music} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> Music</p>
            </li>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={movie} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> Movies</p>
            </li>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={live} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> Live</p>
            </li>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={game} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> Gaming</p>
            </li>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <BsNewspaper className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> News</p>
            </li>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <AiOutlineBulb className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Learning</p>
            </li>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <PiCoatHanger className="col-span-2 text-xl" />
              <p className=" text-[.9rem] col-span-10"> Fashion & beauty</p>
            </li>
          </ul>

          <ul className="border-b border-neutral-600 flex flex-col  py-2">
            <h3 className="font-medium text-md mb-2 px-5">More from YouTube</h3>

            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={unknown} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> YouTube Premium</p>
            </li>

            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={unknown} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> YouTube Music</p>
            </li>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={unknown} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> YouTube Kids</p>
            </li>
          </ul>

          <ul className="border-b border-neutral-600 flex flex-col  py-2">
            <li className="grid grid-flow-col gap-6  px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={settings} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> Settings</p>
            </li>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={report} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> Report history</p>
            </li>
            <li className="grid grid-flow-col gap-6   px-5 py-2 rounded-md hover:bg-zinc-800">
              <img src={unknown} alt="logo" className="col-span-2" />
              <p className=" text-[.9rem] col-span-10"> Help</p>
            </li>
          </ul>

          <div className="flex flex-col pb-3">
            <p className="text-sm text-neutral-500 px-5 py-2">
              Lorem Ipsum is a type of placeholder text used in the printing and
              typesetting industry.
            </p>
            <p className="text-sm text-neutral-500 px-5 py-2">
              It's often used as a temporary filler text when the actual content
              is not available.
            </p>

            <p className="text-sm text-neutral-500 px-5 py-1"> Lorem Ipsum</p>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Sidebar;

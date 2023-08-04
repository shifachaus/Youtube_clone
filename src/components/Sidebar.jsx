import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { toggleMenu } from "./utils/appSlice";
import logo from "../assets/yt-logo.png";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className=" col-span-1 w-52 shadow-sm     h-full px-3  bg-black">
      <aside
        className="fixed top-0 md:top-20 left-0 z-50 h-screen overflow-y-auto scroll-smooth  bg-black"
        aria-label="Sidebar"
      >
        <div className="flex flex-col gap-2 md:w-48  w-52">
          <div className="md:hidden flex col-span-1 items-center px-5 py-4">
            <h1
              onClick={() => handleToggle()}
              className="text-2xl cursor-pointer"
            >
              <BiMenu />
            </h1>

            <Link to="/" className="md:w-24 w-20">
              <img className="mx-2 " src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="border-b border-slate-300 px-5 py-2">
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>Shorts</li>
            <li>Subscriptions</li>
          </ul>

          <ul className="border-b border-slate-300 px-5 py-2">
            <li>Library</li>
            <li>History</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
          </ul>
          <h3 className="border-b border-slate-300 px-5 py-2 font-medium text-md mb-2">
            Subscriptions
          </h3>
          <ul className=" px-5 py-2">
            <h3 className="font-medium text-md mb-2">Explore</h3>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Learning</li>
            <li>Fashion & beauty</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

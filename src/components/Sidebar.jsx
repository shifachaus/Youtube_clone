import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleMenu } from "./utils/appSlice";
import logo from "../assets/yt-logo.png";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);

  return (
    <section
      className={`${isMenuOpen && "col-span-1 w-60 shadow-sm  h-full px-3 "} `}
    >
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
              <RxHamburgerMenu className="text-2xl cursor-pointer text-stone-100" />
            </span>

            <Link to="/">
              <img className="w-24 " src={logo} alt="logo" />
            </Link>
          </div>

          <ul className="border-b flex flex-col gap-4 border-stone-700 px-5 py-2">
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>Shorts</li>
            <li className="mb-4">Subscriptions</li>
          </ul>

          <ul className="border-b border-stone-700 flex flex-col gap-4 px-5 py-2">
            <li>Library</li>
            <li>History</li>
            <li>Your Videos</li>
            <li className="mb-4">Watch Later</li>
          </ul>

          <ul className="border-b border-stone-700 flex flex-col gap-4 px-5 py-2">
            <h3 className="font-medium text-md mb-2">Subscriptions</h3>
            <li>Library</li>
            <li>History</li>
            <li>Your Videos</li>
            <li className="mb-4">Watch Later</li>
          </ul>

          <ul className="border-b border-stone-700 flex flex-col gap-4 px-5 py-2">
            <h3 className="font-medium text-md mb-2">Explore</h3>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Learning</li>
            <li className="mb-4">Fashion & beauty</li>
          </ul>

          <ul className="border-b border-stone-700 flex flex-col gap-4 px-5 py-2">
            <li>Settings</li>
            <li>Report history</li>
            <li>Help</li>
            <li>Send Feedback</li>
          </ul>

          <p className="text-sm text-neutral-500 px-5 py-2">
            Lorem Ipsum is a type of placeholder text used in the printing and
            typesetting industry. It's often used as a temporary filler text
            when the actual content is not available.
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Sidebar;

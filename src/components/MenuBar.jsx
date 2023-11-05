import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import ThemeContext from "../context/theme_context";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";

const MenuBar = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <section
      className={`hidden   ${
        isMenuOpen ? "hidden" : "md:grid col-span-1 mt-12 z-10 fixed"
      } `}
    >
      <aside aria-label="Sidebar" className="fixed w-30 ">
        <div className="p-2">
          <ul className="flex flex-col gap-3 py-2">
            <Link to="/">
              <li
                className={`flex flex-col items-center gap-2   ${
                  !isDarkTheme
                    ? " hover:bg-zinc-800 "
                    : " hover:bg-neutral-200 "
                }  py-2 rounded-md `}
              >
                <GoHomeFill className="col-span-2 text-xl" />

                <p className="text-[11px]   "> Home</p>
              </li>
            </Link>
            <li
              className={`flex flex-col items-center gap-2   ${
                !isDarkTheme ? " hover:bg-zinc-800 " : " hover:bg-neutral-200 "
              }  py-2 rounded-md `}
            >
              <CiYoutube className="col-span-2 text-xl" />
              <p className="text-[11px] "> Shorts</p>
            </li>
            <li
              className={`flex flex-col items-center gap-2   ${
                !isDarkTheme ? " hover:bg-zinc-800 " : " hover:bg-neutral-200 "
              }  py-2 rounded-md `}
            >
              <MdOutlineSubscriptions className="col-span-2 text-xl" />
              <p className="text-[11px] "> Subscriptions</p>
            </li>
            <li
              className={`flex flex-col items-center gap-2   ${
                !isDarkTheme ? " hover:bg-zinc-800 " : " hover:bg-neutral-200 "
              }  py-2 rounded-md `}
            >
              <MdOutlineVideoLibrary className="col-span-2 text-xl" />
              <p className="text-[11px] ">Library</p>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default MenuBar;

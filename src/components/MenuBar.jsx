import { Link } from "react-router-dom";
import home from "../../public/home.png";
import shorts from "../../public/shorts.png";
import subscription from "../../public/subscriptions.png";
import library from "../../public/library.png";
import { useSelector } from "react-redux";
import { useContext } from "react";
import ThemeContext from "../context/theme_context";

const MenuBar = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);

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
                <img src={home} alt="home" className="w-6" />
                <p className="text-[11px]   "> Home</p>
              </li>
            </Link>
            <li
              className={`flex flex-col items-center gap-2   ${
                !isDarkTheme ? " hover:bg-zinc-800 " : " hover:bg-neutral-200 "
              }  py-2 rounded-md `}
            >
              <img src={shorts} alt="Shorts" className="w-6" />
              <p className="text-[11px] "> Shorts</p>
            </li>
            <li
              className={`flex flex-col items-center gap-2   ${
                !isDarkTheme ? " hover:bg-zinc-800 " : " hover:bg-neutral-200 "
              }  py-2 rounded-md `}
            >
              <img src={subscription} alt="Subscriptions" className="w-6" />
              <p className="text-[11px] "> Subscriptions</p>
            </li>
            <li
              className={`flex flex-col items-center gap-2   ${
                !isDarkTheme ? " hover:bg-zinc-800 " : " hover:bg-neutral-200 "
              }  py-2 rounded-md `}
            >
              <img src={library} alt="Library" className="w-6" />
              <p className="text-[11px] ">Library</p>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default MenuBar;

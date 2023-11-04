import { useSelector } from "react-redux";
import { useContext } from "react";
import ThemeContext from "../context/theme_context";

import Tabs from "./SidebarTabs";
import Logo from "./Logo";
import SidebarTabs from "./SidebarTabs";
const Sidebar = () => {
  const { isDarkTheme } = useContext(ThemeContext);

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
        <Logo style={"px-6 py-2"} />

        <SidebarTabs />
      </aside>
    </section>
  );
};

export default Sidebar;

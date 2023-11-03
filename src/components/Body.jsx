import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MenuBar from "./MenuBar";
import { useContext } from "react";
import ThemeContext from "../context/theme_context";

const Body = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`xl:grid xl:grid-flow-col ${
        !isDarkTheme
          ? "bg-zinc-950 text-neutral-200"
          : "bg-white text-neutral-800 "
      }  `}
    >
      <section className="md:grid md:grid-flow-col ">
        <Sidebar />
        <MenuBar />
        <Outlet />
      </section>
    </div>
  );
};

export default Body;

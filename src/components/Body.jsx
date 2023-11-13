import Sidebar from "./Sidebar";
import MenuBar from "./MenuBar";
import { Suspense, lazy, useContext } from "react";
import ThemeContext from "../context/theme_context";
import Loading from "./Loading";
// Lazy load Outlet
const Outlet = lazy(() =>
  import("react-router-dom").then((module) => ({ default: module.Outlet }))
);

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
      <Suspense fallback={<Loading />}>
        <section className="md:grid md:grid-flow-col ">
          <Sidebar />
          <MenuBar />
          <Outlet />
        </section>
      </Suspense>
    </div>
  );
};

export default Body;

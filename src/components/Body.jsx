import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MenuBar from "./MenuBar";

const Body = () => {
  return (
    <div className="xl:grid xl:grid-flow-col ">
      <section className="md:grid md:grid-flow-col ">
        <Sidebar />
        <MenuBar />
        <Outlet />
      </section>
    </div>
  );
};

export default Body;

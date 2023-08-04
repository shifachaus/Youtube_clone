import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="md:grid md:grid-flow-col  bg-black ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

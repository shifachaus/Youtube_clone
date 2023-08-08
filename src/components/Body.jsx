import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="xl:grid xl:grid-flow-col  bg-black ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

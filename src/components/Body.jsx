import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="xl:grid xl:grid-flow-col ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

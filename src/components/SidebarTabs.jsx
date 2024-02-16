import { useContext } from "react";
import { useSelector } from "react-redux";
import { tab1, tab2, tab3, tab4, tab5 } from "../utils/helper";
import ThemeContext from "../context/theme_context";
import LoginButton from "./LoginButton";
import Tab from "./Tab";

const SidebarTabs = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const user = useSelector((store) => store.user.user);

  const isUserEmpty = !user || (Array.isArray(user) && user.length === 0);

  return (
    <div
      className="flex flex-col gap-2 py-1   px-2 hover:h-screen  overflow-y-auto overflow-x-hidden"
      style={{
        "--primary": isDarkTheme ? "#fff" : "rgba(9, 9, 11, 1)",
        "--secondary": isDarkTheme
          ? "rgb(166, 166, 166)"
          : "rgb(110, 110, 110)",
      }}
    >
      <Tab tabs={tab1} />
      <Tab tabs={tab2} />

      {isUserEmpty && (
        <ul
          className={`border-b flex flex-col   py-2  px-5    ${
            !isDarkTheme ? "border-neutral-600 " : "border-neutral-601  "
          } `}
        >
          <li className="text-md mb-2 flex flex-col items-start gap-4 ">
            <p>Sign in to like videos, comment, and subscribe.</p>
            <LoginButton />
          </li>
        </ul>
      )}

      <Tab tabs={tab3} />

      <Tab tabs={tab4} />
      <Tab tabs={tab5} />

      <div className="flex flex-col pb-10">
        <p className="text-sm text-neutral-500 px-5 py-2">
          Lorem Ipsum is a type of placeholder text used in the printing and
          typesetting industry.
        </p>
        <p className="text-sm text-neutral-500 px-5 py-2">
          It's often used as a temporary filler text when the actual
        </p>

        <p className="text-sm text-neutral-500 px-5 py-2"> Lorem Ipsum</p>
      </div>
    </div>
  );
};

export default SidebarTabs;

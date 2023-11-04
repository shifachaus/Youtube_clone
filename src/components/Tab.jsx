import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/theme_context";

const Tab = ({ tabs }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <ul
      className={`border-b flex flex-col py-2 ${
        !isDarkTheme ? "border-neutral-600" : "border-neutral-601"
      }`}
    >
      {tabs.map((tab, index) => (
        <Link to="/" key={index}>
          <li
            className={`grid grid-flow-col gap-6 px-5 py-2 rounded-md ${
              tab.color && !isDarkTheme
                ? "bg-zinc-800 hover:bg-neutral-700"
                : !isDarkTheme
                ? "hover:bg-neutral-700"
                : tab.color
                ? "bg-zinc-100 hover:bg-neutral-200"
                : "hover:bg-neutral-200"
            }`}
          >
            {tab.icon}
            <p
              className={`${
                tab.color && "font-medium"
              } text-[.9rem] col-span-10`}
            >
              {tab.name}
            </p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Tab;

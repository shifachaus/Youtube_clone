import { useContext } from "react";
import ThemeContext from "../context/theme_context";
import Button from "./Button";

const ButtonList = ({ categories }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`container mx-auto overflow-scroll no-scrollbar p-2  flex items-center  ${
        isDarkTheme ? "bg-white" : "bg-zinc-950 "
      }`}
    >
      <div className="flex whitespace-nowrap gap-3 transition-transform ">
        {categories.map((category, index) => (
          <Button
            key={category}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
            index={index}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;

import { useContext } from "react";
import ThemeContext from "../context/theme_context";

const Button = ({ index, ...props }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <button
      {...props}
      className={`px-3  py-[.4rem] ml-3 whitespace-nowrap    ${
        isDarkTheme
          ? index === 0
            ? "bg-black text-white font-normal "
            : "bg-neutral-100 text-black hover:bg-neutral-200"
          : index === 0
          ? "bg-white text-black font-normal "
          : "bg-zinc-800 text-neutral-200 hover:bg-neutral-700"
      }  rounded-lg text-sm font-medium `}
    />
  );
};

export default Button;

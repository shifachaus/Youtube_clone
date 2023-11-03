import { useContext } from "react";
import ThemeContext from "../context/theme_context";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Dramedy",
  "Bollywood Music",
  "Animated films",
  "Film criticisms",
  "Game shows",
  "Thrillers",
  "Gaming",
  "Cricket",
  "News",
  "Podcasts",
  "Smartphones",
  "Electronic Music",
  "Cars",
  "Action-adventure games",
  "Science",
  "Lessons",
  "Recently uploaded",
];
const ButtonList = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`container max-w-7xl mx-auto overflow-scroll no-scrollbar p-4  flex items-center  ${
        isDarkTheme ? "bg-white" : "bg-zinc-950 "
      }`}
    >
      {list.map((item, index) => (
        <Button key={index} name={item} index={index} />
      ))}
    </div>
  );
};

export default ButtonList;

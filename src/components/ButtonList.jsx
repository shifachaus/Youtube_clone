import { useContext, useRef, useState } from "react";
import ThemeContext from "../context/theme_context";
import Button from "./Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { categories } from "../utils/helper";

const ButtonList = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const buttonContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (buttonContainerRef.current) {
      const newScrollPosition = scrollPosition - 100;
      setScrollPosition(newScrollPosition);
      buttonContainerRef.current.scrollLeft = newScrollPosition;
    }
  };

  const scrollRight = () => {
    if (buttonContainerRef.current) {
      const newScrollPosition = scrollPosition + 100;
      setScrollPosition(newScrollPosition);
      buttonContainerRef.current.scrollLeft = newScrollPosition;
    }
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Calculate whether to show left and right buttons
  const showLeftButton = scrollPosition > 0;
  const showRightButton =
    buttonContainerRef.current &&
    scrollPosition + buttonContainerRef.current.clientWidth <
      buttonContainerRef.current.scrollWidth;

  return (
    <div className="w-screen lg:container  mx-auto">
      <div
        className={`pt-4 flex items-center relative ${
          isDarkTheme ? "bg-white" : "bg-zinc-950 "
        }`}
      >
        {showLeftButton && (
          <div
            className={` fixed left-0 sm:left-2  ${
              isMenuOpen ? "md:left-[15rem]" : "md:left-24"
            } ${isDarkTheme ? " bg-white " : " bg-zinc-950"}`}
          >
            <button
              onClick={scrollLeft}
              className={`hover:rounded-full p-3 z-10 ${
                isDarkTheme
                  ? "hover:bg-neutral-200 bg-white "
                  : "hover:bg-zinc-700 bg-zinc-950"
              }`}
            >
              <BsChevronLeft />
            </button>
          </div>
        )}
        <div
          className={`overflow-x-scroll no-scrollbar`}
          ref={buttonContainerRef}
          style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
        >
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
        {showRightButton && (
          <div
            className={` z-10 ${isDarkTheme ? " bg-white " : " bg-zinc-950"}`}
            style={{ position: "fixed", right: 0, left: "auto" }}
          >
            <button
              className={`hover:rounded-full p-3 z-10 ${
                isDarkTheme
                  ? "hover:bg-neutral-200 bg-white "
                  : "hover:bg-zinc-700 bg-zinc-950"
              }`}
              onClick={scrollRight}
            >
              <BsChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonList;

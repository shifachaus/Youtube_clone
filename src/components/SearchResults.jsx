import { useContext } from "react";
import ThemeContext from "../context/theme_context";
import { formatDateAsRelative, formatNumber } from "../utils/constants";

const SearchResults = ({ result }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className="md:flex  grid grid-cols-2  gap-4 mb-2 ">
      <div className="mb-4 md:mb-2 md:w-4/12 ">
        <img
          src={result?.snippet?.thumbnails?.medium?.url}
          alt="image"
          className="rounded-lg w-full object-cover object-center group-hover:opacity-75 mb-8 "
        />
      </div>

      <div className="flex flex-col gap-2  md:w-8/12 ">
        <p
          className={`leading-1 text-md font-medium lg:text-lg ${
            isDarkTheme ? "text-black" : "text-white"
          }`}
        >
          {result?.snippet?.title}
        </p>

        <div className="flex items-start gap-1">
          <p
            className={`text-xs ${
              isDarkTheme ? "text-neutral-500 " : "text-neutral-400 "
            }  font-medium`}
          >
            1.1K views
          </p>
          <span
            className={` ${
              isDarkTheme ? "text-neutral-500 " : "text-neutral-400 "
            }  font-black text-xs`}
          >
            .
          </span>
          <p
            className={`text-xs ${
              isDarkTheme ? "text-neutral-500 " : "text-neutral-400 "
            }   font-medium `}
          >
            {formatDateAsRelative(result?.snippet?.publishedAt)}
          </p>
        </div>
        <div>
          <p
            className={`text-sm font-normal  ${
              isDarkTheme ? "text-neutral-500 " : "text-neutral-400 "
            } `}
          >
            {result?.snippet?.channelTitle}
          </p>

          <p
            className={`text-xs font-normal  ${
              isDarkTheme ? "text-neutral-500 " : "text-neutral-400 "
            } `}
          >
            {result?.snippet?.description.slice(0, 80)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

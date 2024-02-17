import { formatNumber, formatDateAsRelative } from "../utils/helper";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { RxDotsHorizontal } from "react-icons/rx";

import ThemeContext from "../context/theme_context";
import { useContext, useState } from "react";

const VideoInfo = ({ video, isSmallScreen }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full lg:w-[600px] xl:w-[830px] ">
      <h2
        className={`text-md md:text-lg md:xl font-medium ${
          !isDarkTheme ? " text-neutral-200" : " text-neutral-800 "
        } `}
      >
        {video[0]?.snippet?.title}
      </h2>

      <div className="flex flex-col gap-4  sm:flex-row sm:justify-between ">
        <div className="flex items-center gap-6 ">
          <div className="flex items-start  gap-1 ">
            <BiSolidUserCircle className="text-2xl lg:text-[2.8rem]" />
            <div className="flex flex-col">
              <p
                className={`text-sm ${
                  !isDarkTheme ? " text-neutral-200" : " text-neutral-800 "
                }  font-bold`}
              >
                {isSmallScreen
                  ? `${video[0]?.snippet?.channelTitle.slice(0, 4)}...`
                  : video[0]?.snippet?.channelTitle}
              </p>
              <p
                className={`text-[12px]  ${
                  !isDarkTheme ? " text-neutral-300" : " text-neutral-500 "
                }  `}
              >
                {isSmallScreen
                  ? "306K subscribers".slice(0, 4) + "..."
                  : "306K subscribers"}
              </p>
            </div>
          </div>

          <button
            className={`px-4 py-2 rounded-full  ${
              isDarkTheme
                ? "bg-black text-neutral-50"
                : "bg-white text-neutral-900 "
            } font-medium text-sm`}
          >
            Subscribe
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-scroll no-scrollbar ">
          <div className=" flex items-center ">
            <div
              className={` flex items-center gap-2   pl-3  py-1 rounded-l-full  text-neutral-200  font-medium text-sm  ${
                isDarkTheme
                  ? "bg-neutral-100 text-neutral-900  border-neutral-200 "
                  : "bg-zinc-800 text-neutral-300  "
              }`}
            >
              <button
                className={` flex items-center gap-2 border-r    pl-1 pr-2 py-1 rounded-l-full  text-neutral-200  font-medium text-sm  ${
                  isDarkTheme
                    ? "bg-neutral-100 text-neutral-900  border-neutral-200 "
                    : "bg-zinc-800 text-neutral-300  "
                }`}
              >
                <span>{formatNumber(+video[0]?.statistics?.likeCount)}</span>
                <AiOutlineLike className="text-xl " />
              </button>
            </div>

            <div
              className={` flex items-center gap-2 pl-3  py-2 rounded-r-full  text-neutral-200  font-medium text-sm  ${
                isDarkTheme
                  ? "bg-neutral-100 text-neutral-900  border-neutral-200 "
                  : "bg-zinc-800 text-neutral-300  "
              }`}
            >
              <button
                className={` pr-2 pl-1 rounded-r-full font-medium text-sm ${
                  isDarkTheme
                    ? "bg-neutral-100 text-neutral-900 "
                    : "bg-zinc-800 text-neutral-300  "
                }`}
              >
                <AiOutlineDislike className="text-xl " />
              </button>
            </div>
          </div>

          <button
            className={` flex items-center  gap-2    px-3 py-2 rounded-full  font-medium text-sm ${
              isDarkTheme
                ? "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                : "bg-zinc-800 text-neutral-300 hover:bg-neutral-700"
            } `}
          >
            <PiShareFatThin className="text-xl " />
            share
          </button>
          <button
            className={`flex items-center gap-2   px-4 py-2 rounded-full  font-medium text-sm ${
              isDarkTheme
                ? "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                : "bg-zinc-800 text-neutral-300 hover:bg-neutral-700"
            } `}
          >
            <LiaDownloadSolid className="text-xl " />
            Download
          </button>
          <button
            className={`p-2 rounded-full   font-medium text-sm ${
              isDarkTheme
                ? "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                : "bg-zinc-800 text-neutral-300 hover:bg-neutral-700"
            } `}
          >
            <RxDotsHorizontal className="text-xl" />
          </button>
        </div>
      </div>

      <div
        className={`  px-4 py-2 rounded-xl font-medium text-sm ${
          !isDarkTheme
            ? "bg-zinc-800  hover:bg-neutral-700"
            : "bg-neutral-100  hover:bg-neutral-200  "
        }  `}
      >
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-1">
            <span
              className={`text-sm ${
                isDarkTheme ? "text-neutral-700" : "text-neutral-300"
              }`}
            >
              {formatNumber(+video[0]?.statistics?.viewCount)}
            </span>
            <span
              className={`text-sm ${
                isDarkTheme ? "text-neutral-700" : "text-neutral-300"
              }`}
            >
              View
            </span>
          </p>

          <p>{formatDateAsRelative(video[0]?.snippet?.publishedAt)}</p>
        </div>
        <p
          className={`text-sm ${
            isDarkTheme ? "text-neutral-500" : "text-neutral-200"
          }`}
        >
          {expanded
            ? video[0]?.snippet?.description
            : video[0]?.snippet?.description.slice(0, 150)}{" "}
          <button
            onClick={() => setExpanded(true)}
            className="font-medium text-[.9rem]"
          >
            {!expanded && " ...more"}
          </button>
        </p>
        <button
          onClick={() => setExpanded(false)}
          className="font-medium text-[.9rem]"
        >
          {expanded && "Show less"}
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;

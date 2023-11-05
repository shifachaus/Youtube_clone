import { useContext } from "react";
import { formatDateAsRelative, formatNumber } from "../utils/helper";
import ThemeContext from "../context/theme_context";

const VideoCard = ({ info }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className=" flex flex-col gap-1 mb-6">
      <img
        src={thumbnails?.medium?.url}
        alt="image"
        className="rounded-lg  w-full object-cover object-center group-hover:opacity-75  "
      />
      <p
        className={`font-medium text-md ${
          isDarkTheme ? "text-black" : "text-white"
        } `}
      >
        {title}
      </p>
      <div className="flex flex-col ">
        <p
          className={`text-sm ${
            isDarkTheme ? "text-neutral-500 " : "text-neutral-400 "
          }    font-medium`}
        >
          {channelTitle}
        </p>
        <div className="flex items-start gap-1">
          <p
            className={`text-sm ${
              isDarkTheme ? "text-neutral-500 " : "text-neutral-400 "
            }  font-medium`}
          >
            {formatNumber(+statistics?.viewCount)} views
          </p>
          <span
            className={` ${
              isDarkTheme ? "text-neutral-500 " : "text-neutral-400 "
            }  font-black text-sm`}
          >
            .
          </span>
          <p
            className={`text-sm ${
              isDarkTheme ? "text-neutral-500 " : "text-neutral-400 "
            }   font-medium `}
          >
            {formatDateAsRelative(publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

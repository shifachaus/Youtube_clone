import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import Sidebar from "./Sidebar";
import { formatNumber, formatDateAsRelative } from "../utils/helper";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { RxDotsHorizontal } from "react-icons/rx";

import ThemeContext from "../context/theme_context";

const WatchPage = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideo();
  }, []);

  const getVideo = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API + searchParams.get("v"));
    const data = await response.json();
    setVideo(data?.items);
    // console.log(data.items);
  };

  const [expanded, setExpanded] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 440 && window.innerWidth < 1080); // Adjust the screen size threshold as needed
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={` ${
        !isDarkTheme
          ? "bg-zinc-950 text-neutral-200"
          : "bg-white text-neutral-800 "
      } `}
    >
      <Sidebar />
      <div className="mx-auto container">
        <div className={`flex flex-col gap-1 container mt-20 mb-6   lg:ml-10 `}>
          <div className="lg:grid lg:grid-flow-col  lg:gap-10">
            <div className="mb-6 lg:mb-4 col-span-6 lg:w-[600px]  ">
              <iframe
                className="w-full mb-6  lg:w-[600px] xl:w-[830px] h-60 sm:h-80 md:h-[300px] lg:h-[370px] rounded-lg"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              <div className=" lg:hidden mb-6 ">
                <LiveChat />
              </div>
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
                            !isDarkTheme
                              ? " text-neutral-200"
                              : " text-neutral-800 "
                          }  font-bold`}
                        >
                          {isSmallScreen
                            ? `${video[0]?.snippet?.channelTitle.slice(
                                0,
                                4
                              )}...`
                            : video[0]?.snippet?.channelTitle}
                        </p>
                        <p
                          className={`text-[12px]  ${
                            !isDarkTheme
                              ? " text-neutral-300"
                              : " text-neutral-500 "
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
                      <button
                        className={` flex items-center gap-2 border-r    pl-4 pr-2 py-2 rounded-l-full  text-neutral-200  font-medium text-sm  ${
                          isDarkTheme
                            ? "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border-neutral-200 "
                            : "bg-zinc-800 text-neutral-300 hover:bg-neutral-700 "
                        }`}
                      >
                        <span>
                          {formatNumber(+video[0]?.statistics?.likeCount)}
                        </span>
                        <AiOutlineLike className="text-xl " />
                      </button>
                      <button
                        className={` pr-4 pl-2 py-2 rounded-r-full font-medium text-sm ${
                          isDarkTheme
                            ? "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                            : "bg-zinc-800 text-neutral-300 hover:bg-neutral-700 "
                        }`}
                      >
                        <AiOutlineDislike className="text-xl " />
                      </button>
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

                    <p>
                      {formatDateAsRelative(video[0]?.snippet?.publishedAt)}
                    </p>
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
            </div>

            <div className="hidden lg:block col-span-6 ">
              <LiveChat />
            </div>
          </div>

          <div className="w-full lg:w-[600px]  xl:w-[830px]  ">
            <CommentsContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchPage;

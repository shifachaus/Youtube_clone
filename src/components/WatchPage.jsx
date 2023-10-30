import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import Sidebar from "./Sidebar";
import { formatNumber, formatDateAsRelative } from "../utils/constants";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { RxDotsHorizontal } from "react-icons/rx";

const WatchPage = () => {
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
    console.log(data.items);
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [expanded, setExpanded] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 940); // Adjust the screen size threshold as needed
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
    <section className="">
      <Sidebar />
      <div
        className={`${
          !isMenuOpen && "xl:mx-20"
        } flex flex-col gap-2 container mt-24 mb-6 mx-auto`}
      >
        <div className="lg:grid lg:grid-flow-col  ">
          <div className="mb-6 lg:mb-4 col-span-6 lg:w-[650px] xl:w-[750px] ">
            <iframe
              className="w-full lg:[650px] xl:w-[840px]  h-60 sm:h-80 md:h-[300px] lg:h-[400px] mb-4 rounded-lg"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div className="flex flex-col gap-4 ">
              <h2 className="text-md md:text-lg md:xl font-medium text-neutral-200">
                {video[0]?.snippet?.title}
              </h2>

              <div className="flex flex-col gap-4  sm:flex-row sm:justify-between ">
                <div className="flex items-center gap-6 ">
                  <div className="flex items-start  gap-1 ">
                    <BiSolidUserCircle className="text-2xl lg:text-[2.8rem]" />
                    <div className="flex flex-col">
                      <p className="text-sm text-neutral-200 font-bold">
                        {isSmallScreen
                          ? `${video[0]?.snippet?.channelTitle.slice(0, 4)}...`
                          : video[0]?.snippet?.channelTitle}
                      </p>
                      <p className="text-[12px]  text-neutral-400 font-medium">
                        {isSmallScreen
                          ? "306K subscribers".slice(0, 4) + "..."
                          : "306K subscribers"}
                      </p>
                    </div>
                  </div>

                  <button className="px-4 py-2 rounded-full bg-white text-black font-medium text-sm">
                    Subscribe
                  </button>
                </div>

                <div className="flex items-center gap-2 ">
                  <div className=" flex items-center ">
                    <button className=" flex items-center gap-2 border-r  border-neutral-500   pl-4 pr-2 py-2 rounded-l-full bg-zinc-800 text-neutral-200  font-medium text-sm hover:bg-neutral-700 ">
                      <span>
                        {formatNumber(+video[0]?.statistics?.likeCount)}
                      </span>
                      <AiOutlineLike className="text-xl " />
                    </button>
                    <button className=" pr-4 pl-2 py-2 rounded-r-full bg-zinc-800 text-neutral-200  font-medium text-sm hover:bg-neutral-700">
                      <AiOutlineDislike className="text-xl " />
                    </button>
                  </div>

                  <button className=" flex items-center   px-3 py-2 rounded-full bg-zinc-800 text-neutral-200  font-medium text-sm hover:bg-neutral-700 ">
                    <PiShareFatThin className="text-xl hover:bg-neutral-700" />
                    share
                  </button>
                  <button className=" flex items-center gap-2   px-4 py-2 rounded-full bg-zinc-800 text-neutral-200  font-medium text-sm hover:bg-neutral-700 ">
                    <LiaDownloadSolid className="text-xl hover:bg-neutral-700" />
                    Download
                  </button>
                  <button className="p-2 rounded-full bg-zinc-800 text-neutral-200  font-medium text-sm hover:bg-neutral-700 ">
                    <RxDotsHorizontal className="text-xl" />
                  </button>
                </div>
              </div>

              <div className="  px-4 py-2 rounded-xl bg-zinc-800 text-neutral-200  font-medium text-sm hover:bg-neutral-700">
                <div className="flex items-center gap-2">
                  <p className="flex items-center gap-1">
                    <span className="text-sm text-neutral-300">
                      {formatNumber(+video[0]?.statistics?.viewCount)}
                    </span>
                    <span className="text-sm text-neutral-300">View</span>
                  </p>

                  <p>{formatDateAsRelative(video[0]?.snippet?.publishedAt)}</p>
                </div>
                <p className="text-sm text-neutral-300">
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

          <div className="col-span-6  ">
            <LiveChat />
          </div>
        </div>

        <div className="w-full lg:w-[600px] l  xl:w-[840px]  ">
          <CommentsContainer />
        </div>
      </div>
    </section>
  );
};

export default WatchPage;

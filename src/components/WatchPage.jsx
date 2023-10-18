import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import Sidebar from "./Sidebar";

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
    // console.log(data.items);
  };

  return (
    <section>
      <Sidebar />
      <div className=" flex flex-col gap-2 container mt-24 mb-6 mx-auto">
        <div className="lg:grid lg:grid-flow-col">
          <div className="mb-6 lg:mb-4">
            <iframe
              className="w-full h-60 sm:h-80 md:h-[400px] lg:w-[600px] lg:h-[450px]  xl:w-[840px] mb-4 rounded-lg"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:xl font-medium">
                {video[0]?.snippet?.title}
              </h2>

              <p className="text-sm font-medium">
                {video[0]?.snippet?.channelTitle}
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-neutral-400">
                  {video[0]?.statistics?.likeCount}Like
                </p>

                <p className="text-sm text-neutral-400">
                  {video[0]?.statistics?.viewCount}View
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-11">{/* <LiveChat /> */}</div>
        </div>

        <div className="w-full lg:w-[600px] l  xl:w-[840px]  ">
          <CommentsContainer />
        </div>
      </div>
    </section>
  );
};

export default WatchPage;

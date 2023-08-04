import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "./utils/constants";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  //   const params = useParams();
  //   console.log(params);

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

  console.log(video[0]?.snippet?.title);

  return (
    <div className="py-16 px-5 flex flex-col gap-2  w-[90%] max-w-7xlxl my-0 mx-auto mt-6 mb-6 ">
      <iframe
        className="w-full h-60 md:h-[500px] md:w-[740px] lg:w-[900px] mb-2 "
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div className="flex flex-col gap-2">
        <h2 className="text-md md:xl font-medium">
          {video[0]?.snippet?.title}
        </h2>

        <p className="text-sm font-medium">{video[0]?.snippet?.channelTitle}</p>
        <p className="text-sm text-gray-400">
          {video[0]?.statistics?.likeCount}Like
        </p>

        <p className="text-sm text-gray-400">
          {video[0]?.statistics?.viewCount}View
        </p>
      </div>

      <div className="md:w-[740px] lg:w-[900px] ">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;

import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    // console.log(data.items);
    setVideos(data.items);
  };

  return (
    <div
      className={`grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 ${
        isMenuOpen ? "xl:grid-cols-3" : "xl:grid-cols-4"
      }  bg-black h-[calc(100%-56px)] `}
    >
      {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
      {videos?.map((video) => {
        return (
          <Link to={"/watch?v=" + video?.id} key={video?.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;

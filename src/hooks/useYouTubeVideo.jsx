import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

const useYouTubeVideo = (searchParams) => {
  const [video, setVideo] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getVideo();
  }, []);

  const getVideo = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_API + searchParams.get("v"));
      const data = await response.json();
      setVideo(data?.items);
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  return { video };
};

export default useYouTubeVideo;

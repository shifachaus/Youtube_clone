import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import Sidebar from "./Sidebar";
import ThemeContext from "../context/theme_context";
import useSignInWithGoogle from "../hooks/useSignInWithGoogle";
import VideoInfo from "./VideoInfo";
import useYouTubeVideo from "../hooks/useYouTubeVideo";
import useIsSmallScreen from "../hooks/useIsSmallScreen";

const WatchPage = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [searchParams] = useSearchParams();

  const { video } = useYouTubeVideo(searchParams);

  const { isSmallScreen } = useIsSmallScreen();

  const signInWithGoogle = useSignInWithGoogle();

  const handleSignIn = async () => {
    signInWithGoogle();
  };

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
                <LiveChat signInWithGoogle={handleSignIn} />
              </div>

              <VideoInfo video={video} isSmallScreen={isSmallScreen} />
            </div>

            <div className="hidden lg:block col-span-6 ">
              <LiveChat signInWithGoogle={handleSignIn} />
            </div>
          </div>

          <div className="w-full lg:w-[600px]  xl:w-[830px]  ">
            <CommentsContainer signInWithGoogle={handleSignIn} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchPage;

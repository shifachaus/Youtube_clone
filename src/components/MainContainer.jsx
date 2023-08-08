import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className=" col-span-11 h-screen overflow-y-auto scroll-smooth p-2 sm:p-6">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

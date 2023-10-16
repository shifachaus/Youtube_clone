import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import MenuBar from "./utils/MenuBar";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);

  return (
    <section className="grid grid-flow-col">
      <MenuBar />
      <div className="col-span-11 ">
        <div className="fixed top-[3.1rem]   bg-zinc-950">
          <ButtonList />
        </div>

        <div className="col-span-11 h-screen overflow-y-auto scroll-smooth no-scrollbar p-[1.6rem] mt-28">
          <VideoContainer />
        </div>
      </div>
    </section>
  );
};

export default MainContainer;

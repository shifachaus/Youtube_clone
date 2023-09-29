import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);

  return (
    <section>
      <div
        className={`${
          isMenuOpen && "md:ml-60"
        } fixed top-[3.1rem] inset-x-0  z-[10]  bg-zinc-950`}
      >
        <ButtonList />
      </div>
      <div className="col-span-11 h-screen overflow-y-auto scroll-smooth no-scrollbar p-[1.6rem] mt-28">
        <VideoContainer />
      </div>
    </section>
  );
};

export default MainContainer;

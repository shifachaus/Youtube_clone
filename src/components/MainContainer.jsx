import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useState } from "react";
const categories = [
  "All",
  "JavaScript",
  "TypeScript",
  "Programming",
  "Weight Lifting",
  "Bowling",
  "Hiking",
  "React",
  "Next.js",
  "Functional Programming",
  "Object Oriented Programming",
  "Frontend Web Development",
  "Backend Web Development",
  "Web Development",
  "Coding",
];

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);

  return (
    <section className={`${!isMenuOpen ? "md:ml-20" : undefined} `}>
      <div className="col-span-11 ">
        <div className="fixed top-[3.8rem]   ">
          <ButtonList categories={categories} />
        </div>

        <div className="col-span-11 h-screen overflow-y-auto scroll-smooth no-scrollbar p-[1.6rem] mt-28">
          <VideoContainer />
        </div>
      </div>
    </section>
  );
};

export default MainContainer;

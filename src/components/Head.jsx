import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/yt-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Head = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResult, setSearchResult] = useState("");

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    // console.log("API CALL", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const getSearchResults = (e) => {
    console.log(e.target.textContent, "content");
    setSearchResult(e.target.textContent);
    // setShowSuggestions(false);
  };

  return (
    <div className="fixed top-0 inset-x-0  z-[10] py-2 bg-zinc-950">
      <div className="container max-w-full mx-auto flex items-center justify-between gap-4 ">
        <div className="flex col-span-1 items-center gap-2 md:gap-4 ">
          <span
            onClick={() => handleToggle()}
            className="hover:bg-stone-900 rounded-full p-2"
          >
            <RxHamburgerMenu className="text-2xl cursor-pointer text-stone-100" />
          </span>

          <Link to="/">
            <img className="w-24" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="">
          <div className="flex items-center ">
            <input
              type="text"
              className="w-1/2  md:w-[220px] lg:w-[500px]   outline-0  border-l border-t border-b border-zinc-800 px-5 py-2 rounded-l-full  bg-zinc-950 text-white  "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Search"
            />
            <button className="border border-zinc-800 px-5 py-3 rounded-r-full  bg-zinc-900 text-white ">
              <BsSearch />
            </button>
          </div>
          {showSuggestions && (
            <div className="fixed  text-white py-2 px-5 w-[30%] md:w-[220px] lg:w-[500px]  rounded-lg shadow-md border bg-stone-950">
              <ul>
                {suggestions?.map((s) => {
                  return (
                    <Link to={"/result?search_query=" + searchResult} key={s}>
                      <li
                        className="px-2 py-2 flex gap-2 items-center hover:bg-zinc-950 "
                        onClick={(e) => getSearchResults(e)}
                      >
                        <BsSearch /> {s}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className=" flex items-center max-w-s">
          <FaRegUserCircle className=" text-2xl  md:text-3xl text-stone-500" />
        </div>
      </div>
    </div>
  );
};

export default Head;

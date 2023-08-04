import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { BiMenu } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/yt-logo.png";

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
    console.log("API CALL", searchQuery);
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
    <div className="fixed top-0 inset-x-0 bg-black z-[10] py-2">
      <div className="container max-w-full mx-auto flex items-center justify-between gap-4 ">
        <div className="flex col-span-1 items-center ">
          <h1
            onClick={() => handleToggle()}
            className="text-2xl cursor-pointer"
          >
            <BiMenu />
          </h1>

          <Link to="/" className="md:w-24 w-20">
            <img className="mx-2 " src={logo} alt="logo" />
          </Link>
        </div>

        <div className="">
          <div className="flex items-center ">
            <input
              type="text"
              className="w-1/2  md:w-[220px] lg:w-[500px] border border-gray-700 p-2 rounded-l-full outline-0 px-5 bg-gray-950 text-white  "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
            />
            <button className="border border-gray-700 px-5 py-3 rounded-r-full  bg-gray-800 text-white ">
              <BsSearch />
            </button>
          </div>
          {showSuggestions && (
            <div className="fixed bg-gray-950 text-white py-2 px-5 w-[30%] md:w-[220px] lg:w-[500px]  rounded-lg shadow-md border border-gray-900">
              <ul>
                {suggestions?.map((s) => {
                  return (
                    <Link to={"/result?search_query=" + searchResult} key={s}>
                      <li
                        className="px-2 py-2 flex gap-2 items-center hover:bg-gray-900 "
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
          <FaRegUserCircle className=" text-lg md:text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Head;

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GoSearch } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import UserAvatar from "./UserAvatar";
import { useUserContext } from "../context/user_context";
import ThemeContext from "../context/theme_context";

import { MdKeyboardVoice } from "react-icons/md";
import Logo from "./Logo";
import SearchBarSmall from "./SearchBarSmall";
import SearchBarLarge from "./SearchBarLarge";

const Head = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const { myUser } = useUserContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

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
    setSearchQuery(e.target.textContent);
    setSearchResult(e.target.textContent);
  };

  return (
    <div
      className={`fixed top-0 inset-x-0  z-[10] py-2 ${
        !isDarkTheme
          ? "bg-zinc-950 text-neutral-200"
          : "bg-white text-neutral-800 "
      }  `}
    >
      <div className="container max-w-full mx-auto">
        <div
          className={`sm:gap-4 sm:grid sm:grid-flow-col ${
            showSearchBar ? "hidden" : "gap-4 grid grid-flow-col"
          }  `}
        >
          <div
            className="flex col-span-4 items-center gap-4 "
            onClick={() => setShowSuggestions(false)}
          >
            <Logo style={"px-2 py-0"} />
          </div>

          <div className="col-span-7 flex items-center gap-6 justify-end sm:justify-between max-w-s">
            <div className="flex items-center justify-between gap-6">
              <span
                className={`sm:hidden ${
                  !isDarkTheme ? "hover:bg-stone-900" : "hover:bg-neutral-200 "
                }  rounded-full p-2 `}
                onClick={() => setShowSearchBar(true)}
              >
                <GoSearch className=" text-xl cursor-pointer " />
              </span>

              <SearchBarLarge
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setShowSuggestions={setShowSuggestions}
                showSuggestions={showSuggestions}
                suggestions={suggestions}
                getSearchResults={getSearchResults}
              />

              <span
                onClick={() => setShowSuggestions(false)}
                className={` ${
                  !isDarkTheme
                    ? "hover:bg-neutral-700 bg-zinc-800"
                    : "hover:bg-neutral-200 bg-neutral-100"
                }  rounded-full p-2 `}
              >
                <MdKeyboardVoice className=" text-xl cursor-pointer " />
              </span>
            </div>
            <div className="flex" onClick={() => setShowSuggestions(false)}>
              <UserAvatar />
            </div>
          </div>
        </div>

        {showSearchBar && (
          <SearchBarSmall
            setShowSearchBar={setShowSearchBar}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setShowSuggestions={setShowSuggestions}
            showSuggestions={showSuggestions}
            suggestions={suggestions}
            getSearchResults={getSearchResults}
          />
        )}
      </div>
    </div>
  );
};

export default Head;

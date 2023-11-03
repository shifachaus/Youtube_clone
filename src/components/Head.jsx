import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GoSearch } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import logo from "../../public/yt-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import LoginButton from "./LoginButton";
import UserAvatar from "./UserAvatar";
import { useUserContext } from "../context/user_context";
import ThemeContext from "../context/theme_context";

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
          <div className="flex col-span-4 items-center gap-4 md:px-2">
            <span
              onClick={() => handleToggle()}
              className={`${
                !isDarkTheme ? "hover:bg-stone-900" : "hover:bg-neutral-200 "
              }   rounded-full p-2`}
            >
              <RxHamburgerMenu className="text-xl cursor-pointer  " />
            </span>

            <Link to="/">
              <img className="w-24" src={logo} alt="logo" />
            </Link>
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

              <div className="hidden sm:block">
                <div className="flex items-center ">
                  <input
                    className={`w-11/2 sm:w-[200px] md:w-[300px] lg:w-[550px] outline-0  border border-t border-b   px-5 py-[.4rem] rounded-l-full placeholder:text-neutral-500  ${
                      !isDarkTheme
                        ? "bg-stone-950 text-neutral-100  border-neutral-700"
                        : "bg-white text-black border-neutral-300 "
                    }   `}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Search"
                  />
                  <button
                    className={`border-r border-t border-b px-5   ${
                      !isDarkTheme
                        ? "bg-zinc-900 border-neutral-700 "
                        : "bg-neutral-100 text-black border-neutral-300"
                    }  rounded-r-full  text-white py-[.53rem]`}
                  >
                    <GoSearch
                      className={` ${
                        !isDarkTheme
                          ? " text-neutral-200"
                          : " text-neutral-700 "
                      }  text-xl cursor-pointer `}
                    />
                  </button>
                </div>

                {showSuggestions && (
                  <div
                    className={`fixed top-14 z-50 py-2  w-[30%] sm:w-[200px] lg:w-[500px] rounded-lg shadow-md border  ${
                      !isDarkTheme
                        ? "border-zinc-900 bg-zinc-800 text-neutral-100  "
                        : " bg-neutral-100 text-black border-neutral-300"
                    } `}
                  >
                    <ul>
                      {suggestions?.map((s, index) => (
                        <li
                          className={`px-4 py-2  ${
                            !isDarkTheme
                              ? "hover:bg-zinc-900"
                              : "hover:bg-neutral-300"
                          } `}
                          onClick={(e) => getSearchResults(e, s)} // Pass the 's' (suggestion) to getSearchResults
                          key={index} // Use the index as the key
                        >
                          <Link
                            className="flex gap-2 items-center"
                            to={"/result?search_query=" + s}
                          >
                            <GoSearch /> {s}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {!myUser ? <LoginButton /> : <UserAvatar />}
          </div>
        </div>

        {showSearchBar && (
          <div className="flex items-center gap-6   sm:hidden ">
            <span
              className={`w-1/1  ${
                !isDarkTheme ? "hover:bg-stone-900" : "hover:bg-neutral-200 "
              } rounded-full p-2 `}
              onClick={() => setShowSearchBar(false)}
            >
              <FiArrowLeft
                className={`text-2xl cursor-pointer ${
                  !isDarkTheme ? "text-neutral-100" : "text-black"
                }`}
              />
            </span>
            <div className="flex items-center">
              <input
                type="text"
                className={`w-11/2 sm:w-[200px] md:w-[300px] lg:w-[550px] outline-0  border border-t border-b   px-5 py-[.4rem] rounded-l-full placeholder:text-neutral-500  ${
                  !isDarkTheme
                    ? "bg-stone-950 text-neutral-100  border-neutral-700"
                    : "bg-white text-black border-neutral-300 "
                }   `}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search"
              />
              <button
                className={`border-r border-t border-b px-5   ${
                  !isDarkTheme
                    ? "bg-zinc-900 border-neutral-700 "
                    : "bg-neutral-100 text-black border-neutral-300"
                }  rounded-r-full  text-white py-[.53rem]`}
              >
                <GoSearch
                  className={` ${
                    !isDarkTheme ? " text-neutral-200" : " text-neutral-700 "
                  }  text-xl cursor-pointer `}
                />
              </button>

              {showSuggestions && (
                <div
                  className={`fixed top-14 z-50 py-2  w-[50%]  rounded-lg shadow-md border  ${
                    !isDarkTheme
                      ? "border-zinc-900 bg-zinc-800 text-neutral-100  "
                      : " bg-neutral-100 text-black border-neutral-300"
                  }`}
                >
                  <ul>
                    {suggestions?.map((s, index) => (
                      <li
                        className={`px-4 py-2  ${
                          !isDarkTheme
                            ? "hover:bg-zinc-900"
                            : "hover:bg-neutral-300"
                        } `}
                        onClick={(e) => getSearchResults(e, s)}
                        key={index}
                      >
                        <Link
                          className="flex gap-4 items-center "
                          to={"/result?search_query=" + s}
                        >
                          <GoSearch className="text-md font-thin cursor-pointer " />
                          {s}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Head;

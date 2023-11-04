import React, { useContext } from "react";
import ThemeContext from "../context/theme_context";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const SearchBarLarge = ({
  searchQuery,
  setSearchQuery,
  setShowSuggestions,
  showSuggestions,
  suggestions,
  getSearchResults,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className="hidden sm:block">
      <div className="flex items-center ">
        <input
          className={`w-11/2 sm:w-[100px] md:w-[300px] lg:w-[550px] outline-0  border border-t border-b   px-5 py-[.4rem] rounded-l-full placeholder:text-neutral-500  ${
            !isDarkTheme
              ? "bg-zinc-950 text-neutral-100  border-neutral-700"
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
              ? "bg-zinc-800 border-neutral-700 "
              : "bg-neutral-100 text-black border-neutral-300"
          }  rounded-r-full  text-white py-[.53rem]`}
        >
          <GoSearch
            className={` ${
              !isDarkTheme ? " text-neutral-200" : " text-neutral-700 "
            }  text-xl cursor-pointer `}
          />
        </button>
      </div>

      {showSuggestions && (
        <div
          className={`fixed top-14 z-50 py-2  w-[30%] sm:w-[250px] lg:w-[500px] rounded-lg shadow-md border  ${
            !isDarkTheme
              ? "border-zinc-800 bg-zinc-800 text-neutral-100  "
              : " bg-neutral-100 text-black border-neutral-300"
          } `}
        >
          <ul>
            {suggestions?.map((s, index) => (
              <li
                className={`px-4 py-2  ${
                  !isDarkTheme ? "hover:bg-zinc-900" : "hover:bg-neutral-300"
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
  );
};

export default SearchBarLarge;

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT_API } from "../utils/constants";
import SearchResults from "./SearchResults";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useSelector } from "react-redux";

const SearchResultContainer = () => {
  const [searchParams] = useSearchParams();
  const [results, setResult] = useState([]);

  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${searchParams.get("search_query")}`
    ).then((data) => setResult(data?.items));
    getSearchResults();
  }, [searchParams]);

  const getSearchResults = async () => {
    const response = await fetch(
      YOUTUBE_SEARCH_RESULT_API + searchParams.get("search_query")
    );

    const data = await response.json();

    // setResult(data?.items);
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`${
        !isMenuOpen && "md:mx-60"
      } container col-span-11 h-screen overflow-y-auto scroll-smooth no-scrollbar p-[1.6rem] mt-14  max-w-6xl `}
    >
      {results?.map((result, i) => (
        <SearchResults result={result} key={i} />
      ))}
    </div>
  );
};

export default SearchResultContainer;

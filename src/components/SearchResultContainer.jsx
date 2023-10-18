import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT_API } from "../utils/constants";
import SearchResults from "./SearchResults";
import { fetchFromAPI } from "../utils/fetchFromApi";

const SearchResultContainer = () => {
  const [searchParams] = useSearchParams();
  const [results, setResult] = useState([]);

  console.log(searchParams.get("search_query"), "jjj");

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

  return (
    <div className="container mx-auto col-span-11 h-screen overflow-y-auto scroll-smooth no-scrollbar p-[1.6rem] mt-28  max-w-6xl">
      {results?.map((result, i) => (
        <SearchResults result={result} key={i} />
      ))}
    </div>
  );
};

export default SearchResultContainer;

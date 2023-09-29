import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT_API } from "./utils/constants";
import SearchResults from "./SearchResults";

const SearchResultContainer = () => {
  const [searchParams] = useSearchParams();
  const [results, setResult] = useState([]);

  console.log(searchParams.get("search_query"));

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  const getSearchResults = async () => {
    const response = await fetch(
      YOUTUBE_SEARCH_RESULT_API + searchParams.get("search_query")
    );

    const data = await response.json();

    setResult(data?.items);
  };

  return (
    <div className="container mx-auto col-span-11 h-screen overflow-y-auto scroll-smooth no-scrollbar p-[1.6rem] mt-28  max-w-6xl mx-auto">
      {results?.map((result) => (
        <SearchResults result={result} key={result?.id} />
      ))}
    </div>
  );
};

export default SearchResultContainer;

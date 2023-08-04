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
    <div className="py-16 px-5   w-[90%] max-w-5xl my-0 mx-auto mt-6 mb-6 ">
      <h3 className="text-lg text-white mb-4">Search Results</h3>
      {results?.map((result) => (
        <SearchResults result={result} key={result?.id} />
      ))}
    </div>
  );
};

export default SearchResultContainer;

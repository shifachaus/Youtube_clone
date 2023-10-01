const SearchResults = ({ result }) => {
  // console.log(result, "kk");
  return (
    <div className="md:flex  grid grid-cols-2  gap-4 mb-2 ">
      <div className="mb-4 md:mb-2 md:w-4/12 ">
        <img
          src={result?.snippet?.thumbnails?.medium?.url}
          alt="image"
          className="rounded-lg w-full object-cover object-center group-hover:opacity-75 mb-8 "
        />
      </div>
      <div className="flex flex-col gap-2  md:w-8/12 ">
        <p className="leading-1 text-md font-medium lg:text-lg text-neutral-300">
          {result?.snippet?.title}
        </p>
        <p className="text-xs font-normal  text-neutral-400">
          {result?.snippet?.channelTitle}
        </p>
      </div>
    </div>
  );
};

export default SearchResults;

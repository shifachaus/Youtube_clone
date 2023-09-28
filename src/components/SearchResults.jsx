const SearchResults = ({ result }) => {
  console.log(result, "kk");
  return (
    <div className="flex flex-col gap-4 px-4 sm:px-6 md:grid md:grid-cols-2">
      <div className="mb-4">
        <img
          src={result?.snippet?.thumbnails?.medium?.url}
          alt="image"
          className="rounded-lg  w-full object-cover object-center group-hover:opacity-75  "
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-md md:text-lg text-gray-300">
          {result?.snippet?.title}
        </p>
        <p className="text-sm  text-gray-300">
          {result?.snippet?.channelTitle}
        </p>
      </div>
    </div>
  );
};

export default SearchResults;

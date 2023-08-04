const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  // console.log(info);
  return (
    <div className="p-2 m-2 flex flex-col gap-2">
      <img
        src={thumbnails?.medium?.url}
        alt="image"
        className="rounded-lg  w-full object-cover object-center group-hover:opacity-75  "
      />
      <p className="font-medium text-md">{title}</p>
      <p className="text-sm text-gray-400">{channelTitle}</p>
      <p className="text-sm text-gray-400">{statistics?.viewCount} views</p>
    </div>
  );
};

// export const AdVideoCard = ({ info }) => {
//   return (
//     <div className="border border-red-700">
//       <VideoCard info={info} />
//     </div>
//   );
// };

export default VideoCard;

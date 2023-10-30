import { formatNumber } from "../utils/constants";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" flex flex-col gap-3 mb-6">
      <img
        src={thumbnails?.medium?.url}
        alt="image"
        className="rounded-lg  w-full object-cover object-center group-hover:opacity-75  "
      />
      <p className="font-medium text-md text-neutral-100">{title}</p>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-neutral-400">{channelTitle}</p>
        <p className="text-sm text-neutral-400">
          {formatNumber(+statistics?.viewCount)} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

import { formatDateAsRelative, formatNumber } from "../utils/constants";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className=" flex flex-col gap-1 mb-6">
      <img
        src={thumbnails?.medium?.url}
        alt="image"
        className="rounded-lg  w-full object-cover object-center group-hover:opacity-75  "
      />
      <p className="font-medium text-md text-neutral-100">{title}</p>
      <div className="flex flex-col ">
        <p className="text-sm text-neutral-400 font-medium">{channelTitle}</p>
        <div className="flex items-start gap-1">
          <p className="text-sm text-neutral-400  font-medium">
            {formatNumber(+statistics?.viewCount)} views
          </p>
          <span className=" text-neutral-400  font-black text-sm">.</span>
          <p className="text-sm text-neutral-400  font-medium ">
            {formatDateAsRelative(publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

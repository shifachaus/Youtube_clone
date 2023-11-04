import { v4 as uuidv4 } from "uuid";
import {
  IoBagHandleOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineBulb, AiOutlineFire, AiFillYoutube } from "react-icons/ai";
import { PiCoatHanger } from "react-icons/pi";

import { GoHomeFill } from "react-icons/go";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineLiveTv,
} from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import {
  PiMusicNoteThin,
  PiFilmSlate,
  PiGameControllerThin,
  PiFlagThin,
} from "react-icons/pi";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { SiYoutubemusic } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 20;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${GOOGLE_API_KEY}&q=`;

export function formatNumber(value) {
  if (Math.abs(value) >= 1e6) {
    return (value / 1e6).toFixed(1) + "M";
  } else if (Math.abs(value) >= 1e3) {
    return (value / 1e3).toFixed(1) + "k";
  } else {
    return value.toString();
  }
}

export function formatDateAsRelative(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const timeDifference = now - date;
  const secondsAgo = Math.floor(timeDifference / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const monthsAgo =
    now.getMonth() -
    date.getMonth() +
    12 * (now.getFullYear() - date.getFullYear());
  const yearsAgo = now.getFullYear() - date.getFullYear();

  if (yearsAgo >= 1) {
    if (monthsAgo >= 1) {
      return `${yearsAgo} year${
        yearsAgo > 1 ? "s" : ""
      } and ${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
    } else {
      return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
    }
  } else {
    if (monthsAgo >= 1) {
      return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
    } else if (daysAgo >= 1) {
      return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
    } else if (hoursAgo >= 1) {
      return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
    } else {
      return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
    }
  }
}

const dateStr = "2023-10-28T16:30:03Z";
const formattedDate = formatDateAsRelative(dateStr);
console.log(formattedDate);

export const commentsData = [
  {
    id: uuidv4(),
    name: "John Doe",
    text: "This is a new comment from John Doe.",
    replies: [
      {
        id: uuidv4(),
        name: "Alice Smith",
        text: "Reply from Alice Smith to John Doe.",
        replies: [],
      },
      {
        id: uuidv4(),
        name: "Bob Johnson",
        text: "Reply from Bob Johnson to John Doe.",
        replies: [],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Alice Smith",
    text: "Another comment from Alice Smith.",
    replies: [
      {
        id: uuidv4(),
        name: "Charlie Brown",
        text: "Reply from Charlie Brown to Alice Smith.",
        replies: [],
      },
      {
        id: uuidv4(),
        name: "David Wilson",
        text: "Reply from David Wilson to Alice Smith.",
        replies: [
          {
            id: uuidv4(),
            name: "Emily Taylor",
            text: "Reply from Emily Taylor to David Wilson.",
            replies: [
              {
                id: uuidv4(),
                name: "Frank Davis",
                text: "Reply from Frank Davis to Emily Taylor.",
                replies: [
                  {
                    id: uuidv4(),
                    name: "Grace Harris",
                    text: "Reply from Grace Harris to Frank Davis.",
                    replies: [],
                  },
                ],
              },
              {
                id: uuidv4(),
                name: "Helen Clark",
                text: "Reply from Helen Clark to Emily Taylor.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Bob Johnson",
    text: "New comment from Bob Johnson.",
    replies: [
      {
        id: uuidv4(),
        name: "Isabel Lee",
        text: "Reply from Isabel Lee to Bob Johnson.",
        replies: [],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "David Wilson",
    text: "A comment from David Wilson.",
    replies: [
      {
        id: uuidv4(),
        name: "John Doe",
        text: "Reply from John Doe to David Wilson.",
        replies: [],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Ella White",
    text: "Ella White's comment.",
    replies: [
      {
        id: uuidv4(),
        name: "Frank Davis",
        text: "Reply from Frank Davis to Ella White.",
        replies: [],
      },
      {
        id: uuidv4(),
        name: "Grace Harris",
        text: "Reply from Grace Harris to Ella White.",
        replies: [],
      },
      {
        id: uuidv4(),
        name: "Helen Clark",
        text: "Reply from Helen Clark to Ella White.",
        replies: [],
      },
    ],
  },
];

export const tab1 = [
  {
    icon: <GoHomeFill className="col-span-2 text-xl" />,
    name: "Home",
    color: true,
  },
  {
    icon: <CiYoutube className="col-span-2 text-xl" />,
    name: "Shorts",
    color: false,
  },
  {
    icon: <MdOutlineSubscriptions className="col-span-2 text-xl" />,
    name: "Subscriptions",
    color: false,
  },
];

export const tab2 = [
  {
    icon: <MdOutlineVideoLibrary className="col-span-2 text-xl" />,
    name: "Library",
    color: false,
  },
  {
    icon: <VscHistory className="col-span-2 text-xl" />,
    name: "History",
    color: false,
  },
];

export const tab3 = [
  {
    icon: <AiOutlineFire className="col-span-2 text-xl" />,
    name: "Trending",
    color: false,
  },
  {
    icon: <IoBagHandleOutline className="col-span-2 text-xl" />,
    name: "Shopping",
    color: false,
  },
  {
    icon: <PiMusicNoteThin className="col-span-2 text-xl" />,
    name: "Music",
    color: false,
  },
  {
    icon: <PiFilmSlate className="col-span-2 text-xl" />,
    name: "Movies",
    color: false,
  },
  {
    icon: <MdOutlineLiveTv className="col-span-2 text-xl" />,
    name: "Live",
    color: false,
  },
  {
    icon: <PiGameControllerThin className="col-span-2 text-xl" />,
    name: "Gaming",
    color: false,
  },
  {
    icon: <BsNewspaper className="col-span-2 text-xl" />,
    name: "News",
    color: false,
  },
  {
    icon: <AiOutlineBulb className="col-span-2 text-xl" />,
    name: "Learning",
    color: false,
  },
  {
    icon: <PiCoatHanger className="col-span-2 text-xl" />,
    name: "Fashion & beauty",
    color: false,
  },
];

export const tab4 = [
  {
    icon: <AiFillYoutube className="col-span-2 text-xl" />,
    name: "YouTube Premium",
    color: false,
  },
  {
    icon: <SiYoutubemusic className="col-span-2 text-xl" />,
    name: "YouTube Music",
    color: false,
  },
  {
    icon: <TbBrandYoutubeKids className="col-span-2 text-xl" />,
    name: "YouTube Kids",
    color: false,
  },
];

export const tab5 = [
  {
    icon: <IoSettingsOutline className="col-span-2 text-xl" />,
    name: "Settings",
    color: false,
  },
  {
    icon: <PiFlagThin className="col-span-2 text-xl" />,
    name: "Report history",
    color: false,
  },
  {
    icon: <IoHelpCircleOutline className="col-span-2 text-xl" />,
    name: "Help",
    color: false,
  },
];

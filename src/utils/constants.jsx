import { v4 as uuidv4 } from "uuid";

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

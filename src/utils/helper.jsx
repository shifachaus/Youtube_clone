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

export const categories = [
  "All",
  "JavaScript",
  "TypeScript",
  "Programming",
  "Weight Lifting",
  "Bowling",
  "Hiking",
  "React",
  "Next.js",
  "Functional Programming",
  "Object Oriented Programming",
  "Frontend Web Development",
  "Backend Web Development",
  "Web Development",
  "Coding",
];

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function makeRandomMessage(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const findPrime = (num) => {
  let i,
    primes = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = primes[i],
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[i];
    }
    return true;
  };
  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }
  return primes[num - 1];
};

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
// console.log(formattedDate);

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

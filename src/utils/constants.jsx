const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 20;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${GOOGLE_API_KEY}&q=`;

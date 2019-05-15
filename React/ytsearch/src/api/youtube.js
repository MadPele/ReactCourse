import axios from "axios";

const KEY = "AIzaSyDf5vuWBnl_-cmFrK4u3blofJhnJvta580";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

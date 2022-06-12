import "./style.css";
import tweet from "./tweet.js";

let tweets = [
  {
    user: "ali",
    thoughts: "hellow, I am ali.",
    src: "./wolfgang-hasselmann-fdwsFJE6Hzk-unsplash.jpg",
  },
  {
    user: "ahmad",
    thougths: "hellow, I am ahmad.",
    src: "sergey-kvint-m3JzVzNadfE-unsplash.jpg",
  },
  {
    user: "muhammad",
    thoughts: "hello!",
    src: "rod-long-D4LVuTjAd3U-unsplash.jpg",
  },
  {
    user: "corny",
    thoughts: "hi there!",
    src: "ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg",
  },
  {
    user: "mubashir",
    thoughts: "raining outside!",
    src: "navi-wtG0MTyr96Q-unsplash.jpg",
  },
  {
    user: "john",
    thougths: "beauty of sky",
    src: "mick-haupt-4X0bFW4S_QE-unsplash.jpg",
  },
  {
    user: "smith",
    thoughts: "pikky",
    src: "laura-adai-pE6QAt1Vpfo-unsplash.jpg",
  },
  {
    user: "miller",
    thoughts: "more pink",
    src: "laura-adai-pE6QAt1Vpfo-unsplash.jpg",
  },
];

document.querySelector(".tweets").innerHTML = tweets.map(
  ({ user, thoughts, src }) => {
    return tweet(user, thoughts, src);
  }
);

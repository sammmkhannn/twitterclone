import "./style.css";
import tweet from "./tweet.js";

let tweets = [
  {
    pic: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    user: "ali",
    thoughts: "hellow, I am ali.",
    src: "https://images.unsplash.com/photo-1653122952207-f20ba3c64f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    user: "ahmad",
    thougths: "hellow, I am ahmad.",
    src: "https://images.unsplash.com/photo-1653781509531-c0f1cd64c223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    user: "muhammad",
    thoughts: "hello!",
    src: "https://images.unsplash.com/photo-1651303812970-f977adbb5650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1611637576109-b6f76185ec9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    user: "corny",
    thoughts: "hi there!",
    src: "https://images.unsplash.com/photo-1653833393192-903512d66b3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJveXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    user: "mubashir",
    thoughts: "raining outside!",
    src: "https://images.unsplash.com/photo-1654080258151-9272f9666fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1605192554106-d549b1b975cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJveXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    user: "john",
    thoughts: "beauty of sky",
    src: "https://images.unsplash.com/photo-1654094419663-202ce97c3085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJveXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    user: "smith",
    thoughts: "pikky",
    src: "https://images.unsplash.com/photo-1651847077896-9d28960b8a89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1611316185995-9624c94487d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    user: "miller",
    thoughts: "more pink",
    src: "https://images.unsplash.com/photo-1654093618557-489b8f06d4a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

document.querySelector(".tweets").innerHTML = tweets.map(
  ({ pic, user, thoughts, src }) => {
    return tweet(pic, user, thoughts, src);
  }
);

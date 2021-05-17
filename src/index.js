import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let arrPost = [
  {
    content: "Hi, how are you?",
    countLike: 24,
    userImg:
      "https://png.pngtree.com/png-clipart/20190906/original/pngtree-couple-avatar-girl-avatar-cartoon-cute-png-image_4567586.jpg",
  },
  {
    content: "It is my first post",
    countLike: 130,
    userImg:
      "https://png.pngtree.com/png-clipart/20190906/original/pngtree-couple-avatar-girl-avatar-cartoon-cute-png-image_4567586.jpg",
  },
];

let arrUserName = [
  { name: "Anton" },
  { name: "Alex" },
  { name: "Olia" },
  { name: "Pasha" },
  { name: "Katia" },
];
let arrUserDialog = [
  "Hello, where are you disapire?",
  "call me please",
  "lets Rooock",
  "London is a capital of Great Britani",
];

ReactDOM.render(
  <React.StrictMode>
    <App arrPost={arrPost} arrUserName={arrUserName} arrUserDialog={arrUserDialog}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

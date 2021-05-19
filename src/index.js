import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addNewMessage, addNewPost, onChangeNewDialog } from "./redux/state";
import { onChangeNewPost } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addNewPost={addNewPost}
          onChangeNewPost={onChangeNewPost}
          onChangeNewDialog={onChangeNewDialog}
          addNewMessage={addNewMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};


rerenderEntireTree(state);
subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

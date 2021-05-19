import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addNewMessage, addNewPost, onChangeNewDialog } from "./redux/state";
import { onChangeNewPost } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
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

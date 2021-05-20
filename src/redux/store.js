import dialogsReduce from "./dialogsReduce";
import profileReduce from "./profileReduce";
import sidebarReduce from "./sidebarReduce";

let store = {
  _state: {
    dialogsPage: {
      arrUserName: [
        {
          name: "Anton",
          userImg:
            "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-boy-couple-avatar-image_1235465.jpg",
        },
        {
          name: "Alex",
          userImg:
            "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-boy-couple-avatar-image_1235465.jpg",
        },
        {
          name: "Olia",
          userImg:
            "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-boy-couple-avatar-image_1235465.jpg",
        },
        {
          name: "Pasha",
          userImg:
            "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-boy-couple-avatar-image_1235465.jpg",
        },
        {
          name: "Katia",
          userImg:
            "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-boy-couple-avatar-image_1235465.jpg",
        },
      ],
      arrUserDialogs: {
        Anton: [
          {
            content: "Hello, where are you disapire?",
            sender: "Me",
          },
          {
            content: "call me please",
            sender: "Me",
          },
          {
            content: "lets Rooock",
            sender: "User",
          },
          {
            content: "London is a capital of Great Britani",
            sender: "User",
          },
        ],
      },
      newDialogValue: "",
    },
    profilePage: {
      arrPost: [
        {
          id: 0,
          content: "Hi, how are you?",
          countLike: 24,
          userImg:
            "https://png.pngtree.com/png-clipart/20190906/original/pngtree-couple-avatar-girl-avatar-cartoon-cute-png-image_4567586.jpg",
        },
        {
          id: 1,
          content: "It is my first post",
          countLike: 130,
          userImg:
            "https://png.pngtree.com/png-clipart/20190906/original/pngtree-couple-avatar-girl-avatar-cartoon-cute-png-image_4567586.jpg",
        },
      ],
      newPostValue: "",
    },
    sidebarPage: {},
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReduce(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduce(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReduce(this._state.sidebarPage, action);
    this._callSubscriber(this._state);
  },
};





export default store;

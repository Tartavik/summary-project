import { rerenderEntireTree } from "../render";

let state = {
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
    newDialogValue: '',
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
};

export let addNewPost = () => {
  let newPost = {
    id: +`${state.profilePage.arrPost.length}`,
    content: state.profilePage.newPostValue ,
    countLike: 0,
    userImg:
      "https://png.pngtree.com/png-clipart/20190906/original/pngtree-couple-avatar-girl-avatar-cartoon-cute-png-image_4567586.jpg",
  };
  state.profilePage.arrPost.push(newPost);
  state.profilePage.newPostValue = "";
  rerenderEntireTree(state);
};

export let onChangeNewPost = (text) => {
  state.profilePage.newPostValue = text;
  rerenderEntireTree(state);
};

export let addNewMessage = () => {
  let newMessga = {
    content: state.dialogsPage.newDialogValue,
    sender: "User"
  }
  state.dialogsPage.arrUserDialogs.Anton.push(newMessga);
  state.dialogsPage.newDialogValue = '';
  rerenderEntireTree(state);
}

export let onChangeNewDialog = (text) => {
  state.dialogsPage.newDialogValue = text;
  rerenderEntireTree(state);
}

export default state;

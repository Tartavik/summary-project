const onChangeNewPost = "onChangeNewPost";
const addNewPost = "addNewPost";

const profileReduce = (state, action) => {
  switch (action.type) {
    case addNewPost:
      let newPost = {
        id: +`${state.arrPost.length}`,
        content: state.newPostValue,
        countLike: 0,
        userImg:
          "https://png.pngtree.com/png-clipart/20190906/original/pngtree-couple-avatar-girl-avatar-cartoon-cute-png-image_4567586.jpg",
      };
      state.arrPost.push(newPost);
      state.newPostValue = "";
      return state;
    case onChangeNewPost:
      state.newPostValue = action.text;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreated = () => ({ type: addNewPost });

export const onChangePostActionCreated = (text) => ({
  type: onChangeNewPost,
  text: text,
});

export default profileReduce;

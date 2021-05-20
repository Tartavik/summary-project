const addNewMessage = "addNewMessage";
const onChangeNewDialog = "onChangeNewDialog";

const dialogsReduce = (state, action) => {
  switch (action.type) {
    case addNewMessage:
      let newMessga = {
        content: state.newDialogValue,
        sender: "User",
      };
      state.arrUserDialogs.Anton.push(newMessga);
      state.newDialogValue = "";
      return state;
    case onChangeNewDialog:
      state.newDialogValue = action.text;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreated = () => ({ type: addNewMessage });

export const onChangeDialogActionCreated = (text) => ({
  type: onChangeNewDialog,
  text: text,
});

export default dialogsReduce;

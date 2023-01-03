import axios from "axios";

export const AddItemToEvent = (item) => {
  return (dispatch) => {
    axios.get("http://localhost:56570/api/ItemToEvent/Post", item).then(
      (response) => {
        console.log(response);
        dispatch(saveItem(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const saveItem = (item) => {
  return {
    type: "SAVE_ITEM",
    payload: item,
  };
};

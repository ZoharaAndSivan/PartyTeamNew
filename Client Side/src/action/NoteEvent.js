import axios from "axios";

export const AddNoteAction = (item) => {
  return (dispatch) => {
    axios.post("http://localhost:56570/api/NoteEvent/Post", item).then(
      (response) => {
        console.log(response);
        dispatch(saveNote(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const saveNote = (item) => {
  return {
    type: "SAVE_NOTE",
    payload: item,
  };
};
export const GetNoteAction = (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:56570/api/NoteEvent/GetItemsByEventId/" + id)
      .then(
        (response) => {
          console.log(response);
          dispatch(saveNote(response.data));
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};

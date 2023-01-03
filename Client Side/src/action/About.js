import axios from "axios";

export const getAboutAction = () => {
  return (dispatch) => {
    axios.get("http://localhost:56570/api/About/Get").then(
      (response) => {
        console.log(response);
        dispatch(saveAbout(response.data[0].Information));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const saveAbout = (text) => {
  return {
    type: "SAVE_ABOUT",
    payload: text,
  };
};
export const putAboutAction = (record) => {
  return (dispatch) => {
    axios.put("http://localhost:56570/api/About/Put/" + record).then(
      (response) => {
        console.log(response);
        dispatch(saveAbout(record));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};

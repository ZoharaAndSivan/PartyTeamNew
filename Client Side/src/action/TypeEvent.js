import axios from "axios";

export const getAllTypes = () => {
  return (dispatch) => {
    axios.get("http://localhost:56570/api/TypeEvent/Get").then(
      (response) => {
        dispatch(saveTypes(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};

export const saveTypes = (list) => {
  return {
    type: "SAVE_TYPES",
    payload: list,
  };
};
export const getTypes = (id) => {
  return (dispatch) => {
    axios.get("http://localhost:56570/api/TypeEvent/GetTypesByCategoryId/" + id)
      .then(
        (response) => {
          dispatch(saveTypesByCategoryId(response.data, id));
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};
export const saveTypesByCategoryId = (list, id) => {
  return {
    type: "SAVE_TYPES_BY_CATEGORY_ID",
    payload: { list: list, id: id },
  };
};

export const AddList = (list) => {
  return (dispatch) => {
    axios.post("http://localhost:56570/api/TypeEvent/Post", list).then(
      (response) => {
        console.log(response);
        dispatch(addList(list));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const addList = (list) => {
  return {
    type: "ADD_LIST",
    payload: list,
  };
};
export const PutList = (list) => {
  return (dispatch) => {
    axios.post("http://localhost:56570/api/TypeEvent/Put", list).then(
      (response) => {
        console.log(response);
        dispatch(putList(list));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const putList = (list) => {
  return {
    type: "PUT_LIST",
    payload: list,
  };
};

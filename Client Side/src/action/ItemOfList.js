import axios from "axios";

export const getListByTypeAction = (listType) => {
  return (dispatch) => {
    axios
      .get("http://localhost:56570/api/ItemOfList/GetItemById/" + listType)
      .then(
        (response) => {
          console.log(response);
          dispatch(saveAllList({data: response.data,Kind: listType}));
        },  
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};
export const saveAllList = (list) => {
  return {
    type: "SAVE_ALL_ITEM",
    payload: list,
  };
};
export const addRecord = (record) => {
  return (dispatch) => {
    axios.post("http://localhost:56570/api/itemoflist/post",  record).then(
      (response) => {
        console.log(response);
        dispatch(addNewRecord(record));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const addNewRecord = (record) => {
  return {
    type: "ADD_ITEM",
    payload: record,
  };
};
export const putRecord = (record) => {
  return (dispatch) => {
    axios.put("http://localhost:56570/api/itemoflist/Put/" + record).then(
      (response) => {
        console.log(response);
        dispatch(addNewRecord(record));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const deleteRowAction = (id) => {
  return (dispatch) => {
    axios.delete("http://localhost:56570/api/ItemOfList/Delete/" + id).then(
      (response) => {
        console.log(response);
        dispatch(saveAllList(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
import axios from "axios";

export const getCategoriesAction = () => {
  return (dispatch) => {
    axios.get("http://localhost:56570/api/Category/Get").then(
      (response) => {
        console.log(response);
        dispatch(saveCategoriesList(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const saveCategoriesList = (list) => {
  return {
    type: "SAVE_CATEGORIES_LIST",
    payload: list,
  };
};
export const AddCategory = (category) => {
  return (dispatch) => {
    axios.post("http://localhost:56570/api/Category/Post" ,category) 
      .then(
        (response) => {
          console.log(response);
          dispatch(addCategory(category));
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};
export const addCategory = (category) => {
  return {
    type: "ADD_CATEGORY",
    payload: category,
  };
};
export const updateCategoryName = (category) => {
  return (dispatch) => {
    axios.put("http://localhost:56570/api/Category/Put", category).then(
      (response) => {
        console.log(response);
        dispatch(putCategory(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const putCategory = (category) => {
  return {
    type: "PUT_CATEGORY",
    payload: category,
  };
};
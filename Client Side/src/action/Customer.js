import axios from "axios";
export const logOut = () => {
  logOutA();
};
export const addUserAction = (user) => {
  return (dispatch) => {
    axios.post("http://localhost:56570/api/Customer/Post", user).then(
      (response) => {
        console.log(response);
        dispatch(newUser({ ...user, id: response.data }));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};

export const logInAction = (email, password) => {
  return (dispatch) => {
    axios
      .post("http://localhost:56570/api/Customer/PostLogin", {
        email,
        password,
      })
      .then(
        (response) => {
          console.log(response.data);
          dispatch(saveUser(response.data));
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};
export const updateUserAction = (user) => {
  return (dispatch) => {
    axios.put("http://localhost:56570/api/Customer/Put/", user).then(
      (response) => {
        console.log(response);
        dispatch(saveUser(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const saveUser = (user) => {
  return {
    type: "SAVE_USER",
    payload: user,
  };
};
export const newUser = (user) => {
  return {
    type: "NEW_USER",
    payload: user,
  };
};
export const logOutA = () => {
  return {
    type: "LOG_OUT",
    payload: null,
  };
};

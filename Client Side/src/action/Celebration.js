import axios from "axios";

export const getEvents = () => {
  return (dispatch) => {
    axios.get("http://localhost:56570/api/Celebration/Get").then(
      (response) => {
        console.log(response);
        dispatch(saveEvents(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const saveEvents = (list) => {
  return {
    type: "SAVE_EVENTS",
    payload: list,
  };
};
export const addEventLevelOneAction = (details) => {
  return (dispatch) => {
    axios.post("http://localhost:56570/api/Celebration/Post", details).then(
      (response) => {
        console.log(response.data);
        dispatch(saveAlldetails(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};

export const saveAlldetails = (event) => {
  return {
    type: "ADD_EVENT",
    payload: event,
  };
};
export const updateEventOneLevelAction = (celebration) => {
  return (dispatch) => {
    axios.put("http://localhost:56570/api/Celebration/Put", celebration).then(
      (response) => {
        console.log(response);
        dispatch(putEvent(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const putEvent = (celebration) => {
  return {
    type: "PUT_EVENT",
    payload: celebration,
  };
};

//manager function
export const getEventsNotApproval = () => {
  return (dispatch) => {
    axios.get("http://localhost:56570/api/Celebration/GetNotApproval").then(
      (response) => {
        console.log(response);
        dispatch(saveEventsNotApproval(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const saveEventsNotApproval = (list) => {
  return {
    type: "SAVE_EVENTS_FOR_APPROVAL",
    payload: list,
  };
};
export const updateEventAnswer = (id, answer) => {
  console.log(id, answer);
  return {
    type: "UPDATE_EVENT_ANSWER",
    payload: { id: id, answer: answer },
  };
};
export const changeEventStatus = (id, answer) => {
  console.log(id, answer);
  return (dispatch) => {
    axios
      .put("http://localhost:56570/api/Celebration/ChangeEventStatus ", {
        id,
        answer,
      })
      .then(
        (response) => {
          dispatch(updateEventAnswer(id, answer));
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};
export const saveMyEvents = (list) => {
  return {
    type: "SAVE_MY_EVENTS",
    payload: list,
  };
};
export const DeleteEvent = (id) => {
  return (dispatch) => {
    axios.delete("http://localhost:56570/api/Celebration/Delete/" + id).then(
      (response) => {
        console.log(response);
        dispatch(updateEventAnswer(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const getMyCelebrationByUserId = (id) => {
  return (dispatch) => {
    axios
      .get(
        "http://localhost:56570/api/Celebration/GetMyCelebrationByUserId/" + id
      )
      .then(
        (response) => {
          console.log(response);
          dispatch(saveMyEvents(response.data));
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};

export const getOrderCelebrationByUserEmail = (Email) => {
  return (dispatch) => {
    axios
      .post(
        "http://localhost:56570/api/Celebration/GetOrderCelebrationByUserEmail",
        { Email }
      )
      .then(
        (response) => {
          console.log(response);
          dispatch(saveMyOrderEvents(response.data));
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};
export const saveMyOrderEvents = (list) => {
  return {
    type: "SAVE_MY_ORDER_EVENTS",
    payload: list,
  };
};

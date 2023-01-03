import axios from "axios";

export const getCustomerOfEventByEventId = (eventId) => {
  return (dispatch) => {
    axios
      .get(
        "http://localhost:56570/api/CustomerOfEvent/GetCustomerOfEventByEventId/" +
          eventId
      )
      .then(
        (response) => {
          console.log(response);
          dispatch(saveCustomersOfEvent(response.data));
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};

export const saveCustomersOfEvent = (participatesList) => {
  return {
    type: "SAVE_PARTICIPATE",
    payload: participatesList,
  };
};
export const Post = (participate) => {
  return (dispatch) => {
    axios
      .post("http://localhost:56570/api/CustomerOfEvent/Post", participate)
      .then(
        (response) => {
          console.log(response);
          dispatch(saveCustomersOfEvent(response.data));
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};
export const Put = (celebration) => {
  return (dispatch) => {
    axios
      .put("http://localhost:56570/api/CustomerOfEvent/Put", celebration)
      .then(
        (response) => {
          console.log(response);
          dispatch(putParticipate(response.data));
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};
export const putParticipate = (participate) => {
  return {
    type: "PUT_PARTICIPAIT",
    payload: participate,
  };
};
export const ConfirmArrival = (Email, Status) => {
  return (dispatch) => {
    axios
      .put("http://localhost:56570/api/CustomerOfEvent/ConfirmArrival ", {
        Email,
        Status,
      })
      .then(
        (response) => {
          console.log(response);
          dispatch(participateAnswer(Email, Status));
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};
export const participateAnswer = (email, answer) => {
  return {
    type: "PARTCIPATE_ANSWER",
    payload: { email: email, answer: answer },
  };
};

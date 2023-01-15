import { connect } from "react-redux";
import { useNavigate } from "react-router";
import "./AddEvent.css";
import { addEventLevelOneAction } from "../../action/Celebration";
import { getAllTypes } from "../../action/TypeEvent";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AddEvent = (props) => {
  useEffect(() => {
    props.getAllTypes();
  }, []);
  let nav = useNavigate();
  let l = {
    Name: "",
    PepoleAmount: "",
    DateCelebration: "",
    StartHour: "",
    CelebrationType: "",
    Address: "",
    EventManager: null,
    EncodedCelebration: true,
  };
  let Name = true;
  let pepole = true;
  let starthour = true;
  let address = true;
  let date = true;
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    l[name] = value;
  };
  const type = (c) => {
    l.CelebrationType = c.Id;
    if (c.Id == 36) l.EncodedCelebration = false;
  };
  // const validation = () => {
  //   if (l.DateCelebration < Date().now()) {
  //     alert("unvalide date");
  //     date = false;
  //   }
  //   if (l.Name.length == 0 || l.Name.length == 2) {
  //     alert("unvalide name");
  //     Name = false;
  //   }
  //   if (l.PepoleAmount == 1) {
  //     alert("אין אפשרות ליצור אירוע לאדם אחד");
  //     pepole = false;
  //   }
  // };
  const add = (event) => {
    // validation();
    if (l.DateCelebration == null) alert("enetr date");
    if (l.Name == null) alert("enter name");
    if (l.StartHour == null) alert("enter start hour");
    if (l.Address == null) alert("enter address");
    if (l.PepoleAmount == null) alert("enter pepole amount");
    l.EventManager = props.customer.Id;
    event.preventDefault();
    // if (
    //   l.DateCelebration &&
    //   l.Name &&
    //   l.StartHour &&
    //   l.Address &&
    //   l.PepoleAmount &&
    //   Name &&
    //   date &&
    //   address &&
    //   pepole &&
    //   starthour
    // )
    console.log(l);
    props.addEventLevelOneAction(l);
    nav("/addParticipate");
  };

  return (
    <>
      {/* להוסיף תנאי שאם ההמתמש עוד לא נרשם לאתר אז יישלח לטופס ההרשמה */}
      {props.customer == null ? (
        <>
          {" "}
          <p>אינך רשום לאתר? </p> <Link to={"/register"}> להרשמה לחץ כאן </Link>
          <p>משתמש רשום? </p> <Link to={"/login"}> להתחברות לחץ כאן</Link>
        </>
      ) : (
        <>
          <h2> 2 / 1</h2>
          <h4 > פרטי אירוע </h4>
          <form role="form">
            <div className="form-group">
              <label>סוג אירוע</label><br/>
              <select>
                {props.types.map((c) => (
                  <option value={c.Name} onChange={type(c)} key={c.Id}>
                    {" "}
                    {c.Name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>שם אירוע</label><br/>
              <input
                type="text"
                name="Name"
                // className="form-control"
                placeholder="הכנס שם אירוע"
                onChange={change}
              />
            </div>
            <div className="form-group">
              <label>כתובת </label><br/>
              <input
                type="text"
                name="Address"
                // className="form-control"
                placeholder="הכנס כתובת"
                onChange={change}
              />
            </div>
            <div className="form-group">
              <label>תאריך </label><br/>
              <input
                type="date"
                name="CelebrationDate"
                // className="form-control"
                placeholder="הכנס תאריך"
                onChange={change}
              />
            </div>
            {/* הייתי רוצה לאחר מכן שהתצוגה של פרטי האירוע אז למשתתפים התאריך יופיע יותר יפה -כמו בהזמנה  */}
            <div className="form-group">
              <label>שעת התחלה </label><br/>
              <input
                type="time"
                name="StartHour"
                // className="form-control"
                placeholder="הכנס שעת התחלה"
                onChange={change}
              />
            </div>
            <div className="form-group">
              <label>כמות מוזמנים משוערת </label><br/>
              <input
                type="number"
                name="PepoleAmount"
                // className="form-control"
                placeholder="הכנס כמות מוזמנים משוערת"
                onChange={change}
              />
            </div>
            {/*  קומ]וננטה אחרת -----אך ןרק אם מילא את כל הפרטים כאן תופעל פונקצייה בלחיצה שתשלח לשלב הבא */}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                add(e);
              }}
            >
              המשך
            </button>
          </form>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    customer: state.currentUser,
    types: state.types,
  };
};
export default connect(mapStateToProps, {
  getAllTypes,
  addEventLevelOneAction,
})(AddEvent);

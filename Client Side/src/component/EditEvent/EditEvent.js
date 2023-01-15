import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateEventOneLevelAction } from "../../action/Celebration";
import { getAllTypes } from "../../action/TypeEvent";
import { useEffect } from "react";

const EditEvent = (props) => {
  useEffect(() => {
    props.getAllTypes();
  }, []);
  let { id } = useParams();
  let item = { ...props.myEvents.find((x) => x.Id == id) };
  let nav = useNavigate();
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    item[name] = value;
  };
  const editEvent = () => {
    props.updateEventOneLevelAction(item);
    nav("/editParticipates");
  };
  return (
    <>
      <h2> 2 / 1</h2>
      <h4> עדכון פרטי אירוע </h4>
      <form role="form">
        <div className="form-group">
          <label>סוג אירוע</label>
          <select className="form-control" defaultValue={item.CelebrationType}>
            {props.types.map((c) => (
              <option key={c.Id}> {c.Name}</option>
            ))}
            <option> אחר</option>
          </select>
        </div>
        <div className="form-group">
          <label>שם אירוע</label>
          <input
            type="text"
            name="Name"
            className="form-control"
            placeholder="הכנס שם אירוע"
            onChange={change}
            defaultValue={item.Name}
          />
        </div>
        <div className="form-group">
          <label>כתובת </label>
          <input
            type="text"
            name="Address"
            className="form-control"
            placeholder="הכנס כתובת"
            onChange={change}
            defaultValue={item.Address}
          />
        </div>
        <div className="form-group">
          <label>תאריך </label>
          <input
            type="date"
            name="CelebrationDate"
            className="form-control"
            placeholder="הכנס תאריך"
            onChange={change}
            defaultValue={item.DateCelebration}
          />
        </div>
        <div className="form-group">
          <label>שעת התחלה </label>
          <input
            type="time"
            name="StartHour"
            className="form-control"
            placeholder="הכנס שעת התחלה"
            onChange={change}
            defaultValue={item.StartHour}
          />
        </div>
        <div className="form-group">
          <label>כמות מוזמנים משוערת </label>
          <input
            type="number"
            name="PepoleAmount"
            className="form-control"
            placeholder="הכנס כמות מוזמנים משוערת"
            onChange={change}
            defaultValue={item.PepoleAmount}
          />
        </div>
        <button
          type="submit"
          className="btn btn-default"
          onClick={(e) => {
            editEvent();
          }}
        >
          המשך
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    customer: state.currentUser,
    types: state.types,
    myEvents: state.myEvents,
  };
};
export default connect(mapStateToProps, {
  getAllTypes,
  updateEventOneLevelAction,
})(EditEvent);

import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateEventOneLevelAction } from "../../action/Celebration";
import { getAllTypes } from "../../action/TypeEvent";
import { useEffect, useState } from "react";

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
  const [errors, setErrors] = useState({
    Name: false,
    PepoleAmount: false,
    Address: false,
    ImportantText: false,
  });
  
  const validate = () => {
    const validName = new RegExp("^[a-zA-Z0-9._:$!%-]$.{6,}");
    const validPepoleAmount = new RegExp(".{2,}");
    const validImportantText = new RegExp("^[a-zA-Z0-9._:$!%-].{2,}");
    if (item.DateCelebration < Date().now()) {
      alert("unvalide date");
      return false;
    }
    if (validName.test(item.Name) == false) {
      const newErrors = { ...errors };
      newErrors["Name"] = true;
      setErrors(newErrors);
      return false;
    }
    if (validPepoleAmount.test(item.PepoleAmount) == false) {
      const newErrors = { ...errors };
      newErrors["PepoleAmount"] = true;
      setErrors(newErrors);
      return false;
    }
    if (validName.test(item.Address) == false) {
      const newErrors = { ...errors };
      newErrors["Address"] = true;
      setErrors(newErrors);
      return false;
    }
    if (validImportantText.test(item.ImportantText) == false) {
      const newErrors = { ...errors };
      newErrors["ImportantText"] = true;
      setErrors(newErrors);
      return false;
    }
  };
  const editEvent = () => {
    if (!validate()) return;
    if (item.DateCelebration == null) alert("enetr date");
    if (item.Name == null) alert("enter name");
    if (item.StartHour == null) alert("enter start hour");
    if (item.Address == null) alert("enter address");
    if (item.PepoleAmount == null) alert("enter pepole amount");
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
        <h4>הוספת טסקט חשוב</h4>
        <textarea
          className="form-control"
          maxLength="1000"
          placeholder="הוסף הערה"
          name="ImportantText"
          onChange={change}
          defaultValue={item.ImportantText}
        ></textarea>
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

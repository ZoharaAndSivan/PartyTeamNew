import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Post } from "../../action/CustomerOfEvent";

const EditNote = (props) => {
  let nav = useNavigate();
  let note = {
    note: "",
    CelebrationId: ""
  };
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    participate[name] = value;
  };
  const addParticipate = () => {
    props.Post(participate);
  };
  const addParticipate2 = () => {
    addParticipate();
    nav("/addItem");
  };
  return (
    <>
      <h2>4 / 2</h2>
      <h4> הוספת משתתפים</h4>
      <form role="form">
        <div className="form-group">
          <label>שם משתתף</label>
          <input
            type="text"
            name="Name"
            className="form-control"
            placeholder="הכנס שם משתתף"
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>מייל</label>
          <input
            type="email"
            name="Email"
            className="form-control"
            placeholder="הכנס מייל"
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>טלפון</label>
          <input
            type="text"
            name="Phone"
            className="form-control"
            placeholder="הכנס טלפון"
            onChange={change}
          />
        </div>
        <button
          type="button"
          className="btn btn-default"
          onClick={addParticipate}
        >
          +
        </button>
        <br />
        <button
          type="button"
          className="btn btn-default"
          onClick={addParticipate2}
        >
          המשך
        </button>
      </form>
    </>
  );
};
const mapStateToProps = (state) =>{
  return{
    participateOfEvent: state.participateOfEvent
  };
};
export default connect(mapStateToProps, { Post })(EditNote);

import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Put } from "../../action/CustomerOfEvent";

const EditParticipate = (props) => {
  let { id } = useParams();
  let nav = useNavigate();
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    props.participateOfEvent[name] = value;
  };
  const editParticipate = () => {
    props.Put(props.participateOfEvent);
  };
  return (
    <>
      <h2>4 / 2</h2>
      <h4> עריכת משתתפים</h4>
      {props.participateOfEvent ? (
        <>
          {props.participateOfEvent.map((participate) => {
            return (
              <div>
                <input
                  type="text"
                  name="name"
                  defaultValue={participate.Name}
                  onChange={change}
                />
                <input
                  type="text"
                  name="Email"
                  defaultValue={participate.Email}
                  onChange={change}
                />
                <input
                  type="text"
                  name="Phone"
                  defaultValue={participate.Phone}
                  onChange={change}
                />
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={editParticipate}
                >
                  ערוך
                </button>
              </div>
            );
          })}
        </>
      ) : null}
      {/* <form role="form">
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
      </form> */}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    participateOfEvent: state.participateOfEvent,
  };
};
export default connect(mapStateToProps, { Put })(EditParticipate);

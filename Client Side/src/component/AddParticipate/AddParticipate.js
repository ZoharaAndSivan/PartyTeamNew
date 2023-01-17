import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Post } from "../../action/CustomerOfEvent";

const AddParticipate = (props) => {
  let nav = useNavigate();
  const [partList, setPartList] = useState([]);
  const [p, setP] = useState({
    Name: "",
    Email: "",
    Phone: "",
    CelebrationId: props.cel,
    Status: false,
  });
  // let participate = {
  //   Name: "",
  //   Email: "",
  //   Phone: "",
  //   CelebrationId: props.cel,
  //   Status: false,
  // };
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    const participate = { ...p };
    participate[name] = value;
    setP(participate);
  };
  const addParticipate = () => {};
  const addParticipate2 = () => {
    addParticipate();
    alert("האירוע נוצר בהצלחה");
    nav("/homePage");
  };

  const addParticipateToClient = () => {
    {
      partList.map(
        (part) => (
          part.Email == p.Email
            ? console.log("משתתף זה כבר קיים")
            : setPartList([...partList, p]),
          setP({
            Name: "",
            Email: "",
            Phone: "",
            CelebrationId: props.cel,
            Status: false,
          }),
          props.Post(p)
        )
      );
    }
  };
  return (
    <>
      <h2>2 / 2</h2>
      <h4> הוספת משתתפים</h4>
      {partList.length == 0 ? (
        <div>הי, קדימה תוסיף את המשתתפים....</div>
      ) : (
        <table>
          {partList.map((p) => (
            <tr>
              <td>{p.Name}</td>
              <td>{p.Email}</td>
              <td>{p.Phone}</td>
            </tr>
          ))}
        </table>
      )}

      <form role="form">
        <div className="form-group">
          <label>שם משתתף</label>
          <input
            type="text"
            name="Name"
            className="form-control"
            placeholder="הכנס שם משתתף"
            value={p.Name}
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
            value={p.Email}
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
            value={p.Phone}
            onChange={change}
          />
        </div>
        <button
          type="button"
          className="btn btn-default"
          onClick={addParticipateToClient}
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
const mapStateToProps = (state) => {
  return {
    cel: state.currentEvent,
    arr: state.participateOfEvent,
  };
};
export default connect(mapStateToProps, { Post })(AddParticipate);

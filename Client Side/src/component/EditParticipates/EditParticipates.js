import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { getCustomerOfEventByEventId } from "../../action/CustomerOfEvent";
import { Put } from "../../action/CustomerOfEvent";
import { useState } from "react";

const EditParticipate = (props) => {
  let nav = useNavigate();
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    props.participateOfEvent[name] = value;
  };
  const [errors, setErrors] = useState({
    Name: false,
    Email: false,
    Phone: false,
  });
  const validate = (p) => {
    const validName = new RegExp("^[a-zA-Z0-9._:$!%-]$.{6,}");
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    const validPhone = new RegExp("^[0-9].{10}");
    if (validName.test(p.Name) == false) {
      const newErrors = { ...errors };
      newErrors["Name"] = true;
      setErrors(newErrors);
      return false;
    }
    if (validEmail.test(p.Email) == false) {
      const newErrors = { ...errors };
      newErrors["Email"] = true;
      setErrors(newErrors);
      return false;
    }
    
    if (validPhone.test(p.Phone) == false) {
      const newErrors = { ...errors };
      newErrors["Phone"] = true;
      setErrors(newErrors);
      return false;
    }
    return true;
  };
  const editParticipate = (p) => {
    if (!validate(p)) return;
    console.log("editParticipate");
    props.Put(props.participateOfEvent);
  };
  const finish = () => {
    console.log("finished");
    nav("/myEvent");
  };
  return (
    <>
      <h2>2 / 2</h2>  
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
                  onClick={(e)=>editParticipate(e)}
                >
                  ערוך
                </button>
              </div>
            );
          })}
        </>
      ) : null}
      <button onClick={finish} className="btn btn-primary">
        end
      </button>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    participateOfEvent: state.participateOfEvent,
  };
};
export default connect(mapStateToProps, { Put, getCustomerOfEventByEventId })(
  EditParticipate
);

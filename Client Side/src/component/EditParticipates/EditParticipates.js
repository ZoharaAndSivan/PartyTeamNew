import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getCustomerOfEventByEventId } from "../../action/CustomerOfEvent";
import { Put } from "../../action/CustomerOfEvent";

const EditParticipate = (props) => {
  let nav = useNavigate();
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    props.participateOfEvent[name] = value;
  };
  const editParticipate = () => {
    console.log("editParticipate");
    props.Put(props.participateOfEvent);
  };
  const finish = () => {
    console.log("finished");
    nav("myEvent");
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
                  onClick={editParticipate}
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

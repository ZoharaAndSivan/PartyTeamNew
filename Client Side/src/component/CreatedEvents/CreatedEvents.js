import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { getMyCelebrationByUserId } from "../../action/Celebration";
const CreatedEvents = (props) => {
  let nav = useNavigate();
  useEffect(() => {
    props.getMyCelebrationByUserId(props.customer.Id);
  }, []);
  return (
    <>
      <h1>האירועים שלי</h1>
      {props.myEvents ? (
        <div className="container">
          {props.myEvents.map((e) => {
            return (
              <div
                key={e.Id}
                className="celebration"
                onClick={() => nav("/allDetailsForEventManager/" + e.Id)}
              >
                {e.Name}
              </div>
            );
          })}
        </div>
      ) : (
        <p> אין לך אירועים </p>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    myEvents: state.myEvents,
    customer: state.currentUser,
  };
};
export default connect(mapStateToProps, { getMyCelebrationByUserId })(
  CreatedEvents
);

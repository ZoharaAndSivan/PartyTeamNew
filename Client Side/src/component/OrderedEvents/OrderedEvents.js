import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { getOrderCelebrationByUserEmail } from "../../action/Celebration";
import { useEffect } from "react";

const OrderedEvents = (props) => {
  let nav = useNavigate();
  useEffect(() => {
    props.getOrderCelebrationByUserEmail(props.customer.Email);
  }, []);
  return (
    <>
      <h1> הזמנות לאירועים</h1>
      {props.orderEvents ? (
        <div className="container">
          {props.orderEvents.map((e) => {
            return (
              <div
                key={e.Id}
                className="celebration"
                onClick={() => nav("/allDetailsForParticipates/" + e.Id)}
              >
                {e.Name}
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    orderEvents: state.orderEvents,
    customer: state.currentUser
  };
};
export default connect(mapStateToProps, { getOrderCelebrationByUserEmail })(OrderedEvents);

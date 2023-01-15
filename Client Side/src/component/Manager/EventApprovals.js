import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getEventsNotApproval,
  changeEventStatus,
} from "../../action/Celebration";
const EventApprovals = (props) => {
  useEffect(() => {
    props.getEventsNotApproval();
  }, []);
  const changeStatus = (item, value) => {
    console.log(item)
    props.changeEventStatus(item.Id, value);
  };
  return (
    <>
      <div>
        {props.EventsToConfirm.map((item) => {
          return (
            <>
              <div key={item.id} className="event">
                {item.Name}
                {/* {item.customersOfEvent.Id} */}
                <p>שם מבקש:{item.managerDetails.Name}</p>
                <button onClick={() => {changeStatus(item, true);}}>
                  אישור
                </button>
                {console.log(item)}
                <button onClick={() => {changeStatus(item, false);}}>
                  סירוב
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    EventsToConfirm: state.EventsToConfirm,
    manager: state.managerEvent,
  };
};
export default connect(mapStateToProps, {
  getEventsNotApproval,
  changeEventStatus,
})(EventApprovals);

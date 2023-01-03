import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCustomerOfEventByEventId } from "../../action/CustomerOfEvent";

function AllParticipate(props) {
  useEffect(() => {
    props.getCustomerOfEventByEventId(props.id.id);
  }, []);
  return (
    <>
      <h1>כל המשתתפים</h1>
      {props.participateOfEvent ? (
        <div>
          {props.participateOfEvent.map((item, index) => {
            if (item.Status == "true") {
              <>
                <h3>משתתפים שאישרו הגעה</h3>
                <div key={index}>
                  {item.Name} {item.Email} {item.Phone}
                </div>
              </>;
            } else {
              <>
                <h3>משתתפים שלא אישרו הגעה</h3>
                <div key={index}>
                  {item.Name} {item.Email} {item.Phone}
                </div>
              </>;
            }
          })}
        </div>
      ) : null}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    participateOfEvent: state.participateOfEvent,
  };
};
export default connect(mapStateToProps, { getCustomerOfEventByEventId })(
  AllParticipate
);

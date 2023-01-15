import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCustomerOfEventByEventId } from "../../action/CustomerOfEvent";

const AllParticipate = (props) => {
  useEffect(() => {
    console.log("AllParticipate", props);
    props.getCustomerOfEventByEventId(props.id.id);
  }, []);
  return (
    <>
      <h1>כל המשתתפים</h1>
      <div>
        {props.participateOfEvent.map((item, index) => {
          <>
            <div key={index}>{item.Name}</div>
            {/* <h3>משתתפים שאישרו הגעה</h3>
              <div key={index}>
                {item.Name} {item.Email} {item.Phone}
              </div>
              <h3>משתתפים שלא אישרו הגעה</h3>
              <div key={index}>
                {item.Name} {item.Email} {item.Phone}
              </div> */}
          </>;
        })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    participateOfEvent: state.participateOfEvent,
  };
};
export default connect(mapStateToProps, { getCustomerOfEventByEventId })(
  AllParticipate
);

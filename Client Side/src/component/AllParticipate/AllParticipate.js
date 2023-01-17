import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCustomerOfEventByEventId } from "../../action/CustomerOfEvent";

const AllParticipate = (props) => {
  useEffect(() => {
    props.getCustomerOfEventByEventId(props.id.id);
  }, []);
  useEffect(() => {}, [props.participateOfEvent]);
  return (
    <>
      <div>
        {props.participateOfEvent.map((item, index) => (
          <>
            <h1>כל המשתתפים</h1>
            <div key={index}>
              {/* <div key={index}>{item.Name}</div> */}

              {item.Status == "true" ? (
                <>
                  <h3>משתתפים שאישרו הגעה</h3>
                  <div key={index}>
                    {item.Name} {item.Email} {item.Phone}
                  </div>
                </>
              ) : (
                <>
                  <h3>משתתפים שלא אישרו הגעה</h3>
                  <div key={index}>
                    {item.Name} {item.Email} {item.Phone}
                  </div>
                </>
              )}
            </div>
          </>
        ))}
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

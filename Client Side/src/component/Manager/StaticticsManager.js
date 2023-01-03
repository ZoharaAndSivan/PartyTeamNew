import { connect } from "react-redux";

const StaticticsManager = (props) => {
  return (
    <>
    <h1> סטטיסטיקות</h1>
      <div>{props.events}</div>
      <div>{props.users}</div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    events: state.numNewEvents,
    users: state.numNewUsers,
  };
};
export default connect(mapStateToProps, {})(StaticticsManager);

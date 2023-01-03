import Event from "../Event/Event";
import { connect } from "react-redux";

function DescribeOfEvent(props) {
  let id = props.id.id;
  let item = { ...props.myEvents.find((x) => x.Id == id) };
  return (
    <>
      <hr></hr>
      <h1>פרטי האירוע</h1>
      <Event item={item} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    myEvents: state.myEvents,
  };
};
export default connect(mapStateToProps, {})(DescribeOfEvent);

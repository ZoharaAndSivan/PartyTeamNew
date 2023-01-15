import { connect } from "react-redux";
import { Route, useNavigate, useParams } from "react-router";
import Event from "../Event/Event";
import { ConfirmArrival } from "../../action/CustomerOfEvent";
import AddNote from "../AddNote/AddNote";

const AllDetailsForParticpates = (props) => {
  let nav = useNavigate();
  let { id } = useParams();
  let item = { ...props.orderEvents.find((x) => x.Id == id) };
  const arrival = () => {
    console.log("hi i'm in arrival")
    props.ConfirmArrival(props.customer.Email, true);
  };
  return (
    <>
      <Event item={item} />
      <input type="checkbox" onChange={arrival} /><label>Confirm arrival</label>
      <AddNote item={item}/>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    orderEvents: state.orderEvents,
    customer: state.currentUser,
  };
};
export default connect(mapStateToProps,{ConfirmArrival})(AllDetailsForParticpates);

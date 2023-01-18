import { connect } from "react-redux";
import { Route, useNavigate, useParams } from "react-router";
import Event from "../Event/Event";
import {
  ConfirmArrival,
  getDetailsByEmail,
} from "../../action/CustomerOfEvent";
import AddNote from "../AddNote/AddNote";

const AllDetailsForParticpates = (props) => {
  let nav = useNavigate();
  let { id } = useParams();
  let item = { ...props.orderEvents.find((x) => x.Id == id) };

  const arrival = (e) => {
    let a = props.getDetailsByEmail(id, props.customer.Email);
    if (a == true) 
    console.log("hi i'm in arrival");
    props.ConfirmArrival(props.customer.Email, true);
  };
  return (
    <>
      <Event item={item} />
      {/* אם אישרתי הגעה לעשות שהאינפוט יהיה לא נראה */}
      <input type="checkbox" onChange={arrival} />
      <label>Confirm arrival</label>
      <AddNote item={item} />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    orderEvents: state.orderEvents,
    customer: state.currentUser,
  };
};
export default connect(mapStateToProps, { ConfirmArrival, getDetailsByEmail })(
  AllDetailsForParticpates
);

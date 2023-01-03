import AllDetalis from "../AllDetails/AllDetails";
import { useNavigate, useParams } from "react-router";
import { DeleteEvent } from "../../action/Celebration";
import { connect } from "react-redux";

const AllDetailsForEventManager = (props) => {
  let nav = useNavigate();
  let id = useParams();
  return (  
    <>
      <AllDetalis id={id} />
      <input
        type="button"
        value="הסטטיסטיקות שלי"
        onClick={() => nav("/statistics")}
      />
      <input
        type="button"
        value="הערות חברי האירוע"
        onClick={() => nav("/note/"+ id.id)}
      />
      <input
        type="button"
        value="לעריכת האירוע"
        onClick={() => (nav("/editEvent/"+ id.id))}
      />
      <input
        type="button"
        value="למחיקת האירוע"
        onClick={() => (props.DeleteEvent(id.id))}
      />
    </>
  );
};
export default connect(null, {DeleteEvent})(AllDetailsForEventManager);

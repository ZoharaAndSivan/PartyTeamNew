import AllDetalis from '../AllDetails/AllDetails';
import { useNavigate,useParams } from "react-router";
const AllDetailsForEventManager = () => {
    let nav = useNavigate();
    let id = useParams();
    return (
        <>
            <AllDetalis id={id}/>
            <input type="button" value="הסטטיסטיקות שלי" onClick={() => nav("/statistics")} />
            <input type="button" value="הערות חברי האירוע" onClick={() => nav("/note")} />
            <input type="button" value="לעריכת האירוע" onClick={() => nav("/addEvent")} />
        </>
    )
}
export default AllDetailsForEventManager;
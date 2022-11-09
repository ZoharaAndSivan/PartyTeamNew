import { useNavigate } from "react-router";
import "./MyEvent.css";
const MyEvent = () => {
    let nav = useNavigate();
    return (
        <>
            <h1> האירועים שלי </h1>
            <div className="Mydiv" onClick={() => { nav("/createdEvents") }}>אירועים שלי</div><br />
            <div className="Mydiv" onClick={() => { nav("/orderedEvents") }}> הזמנות לאירועים</div>
        </>
    )
}
export default MyEvent;                     
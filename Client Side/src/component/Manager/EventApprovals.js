import { useEffect } from "react";
import { connect } from "react-redux";
import { getEvents, getCustomersOfEvent } from "../../action/action";
const EventApprovals = (props) => {
    useEffect(() => { props.getEvents() }, []);
    const changeStatus = (value, item) => {
        item.EncodedCelebration = value;
        console.log(value);
        console.log(item);
        // props.myEvents.slice(item);
    }
    return (<>
        <div>
            {props.myEvents.map(item => {
                return <>
                    <div key={item.id} className="event">
                        {!item.EncodedCelebration ? item.Name : null}
                        {console.log(item)}
                        {item.customersOfEvent.Id}
                            <p>שם מבקש:</p>
                        <button onClick={() => { changeStatus(true, item) }}>אישור</button>
                        <button onClick={() => { changeStatus(false, item) }}>סירוב</button>
                    </div>
                </>
            })}
        </div>
    </>)
}
const mapStateToProps = (state) => {
    return {
        myEvents: state.myEvents,
        manager:state.managerEvent
    }
}
export default connect(mapStateToProps, { getEvents })(EventApprovals);

import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { getEvents } from '../../action/action';
import {useEffect} from "react"

const OrderedEvents = (props) => {
    let nav = useNavigate();
    useEffect(() => {
        props.getEvents();
    }, [])
    return (
        <>
            <h1> הזמנות לאירועים</h1>
            {props.myEvents ? <div className="container">
                {props.myEvents.map((e) => {
                    return <div key={e.Id} className="celebration" onClick={()=>nav("/describeOfEvent/"+e.Id)}>
                        {e.Name}{console.log(e)}
                    </div >
                })}
            </div> : null}
            {/* <div onClick={() => { nav("/describeOfEvent") }}> החתונה של זורי </div>
            <div onClick={() => { nav("/describeOfEvent") }}>  החתונה של סיווני     </div> */}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myEvents: state.myEvents
    }
}
export default connect(mapStateToProps, { getEvents })(OrderedEvents)
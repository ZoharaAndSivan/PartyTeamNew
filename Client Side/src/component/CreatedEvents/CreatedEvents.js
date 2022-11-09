import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { getEvents } from '../../action/action';
const CreatedEvents = (props) => {
    let nav = useNavigate();
    useEffect(() => {
        props.getEvents();
    },[])
    return (
        <>
            <h1>האירועים שלי</h1>
            {props.myEvents ? <div className="container">
                {props.myEvents.map((e) => {
                    return <div key={e.Id} className="celebration" onClick={()=>nav("/allDetailsForEventManager/"+e.Id)}>
                        {e.Name}{console.log(e)}
                    </div >
                })}
            </div> : null}
           
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        myEvents: state.myEvents
    }
}
export default connect(mapStateToProps, { getEvents })(CreatedEvents);
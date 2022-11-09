import { useEffect, useState } from "react"
import Customer from "../Customer/Customer";
import Customer1 from "../../models/customer";
import { connect } from "react-redux";
import { getCustomerOfEventByEventId } from "../../action/action"

function AllParticipate(props) {
    useEffect(() => {
        props.getCustomerOfEventByEventId(props.id.id);
    }, [])
    return (
        <>
            <h1>כל המשתמשים</h1>
            {props.participateOeEvent ? <div >
                {props.participateOeEvent.map((item, index) => {
                    return <div key={index}>
                            {item.Name} {item.Email} {item.Phone}
                        </div>
                    })}
            </div> : null}
        </>)
}
const mapStateToProps = (state) => {
    return {
        participateOeEvent: state.participateOeEvent
    }
}
export default connect(mapStateToProps, { getCustomerOfEventByEventId })(AllParticipate)
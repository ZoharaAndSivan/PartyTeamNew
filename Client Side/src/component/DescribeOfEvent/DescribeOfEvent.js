import Event from "../Event/Event"
import Event1 from "../../models/Event";
import { useEffect, useState } from "react"
import { connect } from 'react-redux';

function DescribeOfEvent(props) {
    let id = props.id.id;
    console.log(id)

    let item = { ...props.myEvents.find((x) => x.Id == id) };
    console.log(item)
    return (
        <>
            <hr></hr>
            <h1>פרטי האירוע</h1>
            <Event item={item}/>
        </>)
}
const mapStateToProps = (state) => {
    return {
        myEvents: state.myEvents
    }
}
export default connect(mapStateToProps, {})(DescribeOfEvent)
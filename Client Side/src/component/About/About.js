import { connect } from "react-redux";
import { getAboutAction } from "../../action/action";

const About=(props)=>
{
   return(
    <>
       <h1>מי אנחנו Partyteam</h1>
       <div> {props.about}</div>
       </>
   )
}
const mapStateToProps = (state) => {
    return {
        about: state.about
        }
}
export default connect(mapStateToProps, {getAboutAction})(About);
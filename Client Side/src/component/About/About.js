import { useEffect } from "react";
import { connect } from "react-redux";
import { getAboutAction } from "../../action/About";
import aboutData from "../../Assets/about.json";
import "./About.css";
const About = (props) => {
  useEffect(() => {
    props.getAboutAction();
  }, []);

  return (
    <>
      {/* <h1>מי אנחנו Partyteam</h1>
      <div> {props.about}</div> */}
      <h1>מי אנחנו Partyteam?</h1>
      <p >באתר שלנו תוכלו להשתמש ברשימות שלנו לנוחיותכם. בנוסף תוכלו לפתוח פורום אירוע להודיע למוזמנים ולקבל אישורי הגעה.<br/>
        מקוות שתהנו..</p>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    about: state.about,
  };
};
export default connect(mapStateToProps, { getAboutAction })(About);

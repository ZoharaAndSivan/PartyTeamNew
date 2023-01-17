import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getAboutAction } from "../../action/About";
import aboutData from "../../Assets/about.json";
import "./About.css";
const About = (props) => {
  // const about = useSelector((state) => {return state.about;});
  // const dispatch = useDispatch();
  useEffect(() => {
    props.getAboutAction();
  }, []);

  return (
    <>
      <h1>{props.about.heading}</h1>
      <p>{props.about.p1}</p>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    about: state.about,
  };
};
export default connect(mapStateToProps, { getAboutAction })(About);

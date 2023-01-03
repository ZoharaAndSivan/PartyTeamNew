import About from "../About/About";
import { putAboutAction } from "../../action/About";
import { connect } from "react-redux";
import aboutData from "../../Assets/about.json";
import { useEffect } from "react";
const fs = require("fs");


const AboutEdit = (props) => {
  const updatedData = { ...aboutData };
  updatedData.heading = "dsfdsfdsfdsfds";
  // const updatedData = {
  //    heading:"arif updated",
  //    heading2:"shariati updated",
  //    content1:"gfdg",
  //    heading3:"shariati updated",
  //    content2:"gfdg"
  // }
  let a = {
    id: null,
    content: "",
  };
  const change = (e) => {
    let { name, value } = e.target;
    a[name] = value;
  };
  let edit = async () => {
    // props.putAboutAction(a);
  };

  //
  return (
    <>
      <h1>About Page Manager - edit</h1>
      <About />
      <input
        type="text"
        name="content"
        placeholder="עוד עלינו"
        onChange={change}
      />
      <label>update</label>
      <input type="button" value="עדכון" onClick={edit} />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    about: state.about,
  };
};
export default connect(mapStateToProps, { putAboutAction })(AboutEdit);

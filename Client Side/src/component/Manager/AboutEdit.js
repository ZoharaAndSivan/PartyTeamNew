import About from "../About/About";
import { putAboutAction } from "../../action/About";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const AboutEdit = (props) => {
  const [h1Edit, setH1Edit] = useState(false);
  const [p1Edit, setP1Edit] = useState(false);

  const aboutData = props.about;
  const saveAboutData = () => {
    props.putAboutAction(aboutData);
  };

  return (
    <>
      <h1>About Page Manager - edit</h1>
      <div>
        {h1Edit == false ? (
          <h1
            onDoubleClick={() => {
              setH1Edit(true);
            }}
          >
            {props.about.heading}
          </h1>
        ) : (
          <input
            type="text"
            name="heading"
            defaultValue={props.about.heading}
            onChange={(e) => {
              aboutData[e.target.name] = e.target.value;
            }}
            onDoubleClick={() => {
              setH1Edit(false);
            }}
          />
        )}
      </div>
      <div>
        {p1Edit == false ? (
          <p
            onDoubleClick={() => {
              setP1Edit(true);
            }}
          >
            {props.about.p1}
          </p>
        ) : (
          <input
            type="text"
            name="p1"
            defaultValue={props.about.p1}
            onChange={(e) => {
              aboutData[e.target.name] = e.target.value;
            }}
            onDoubleClick={() => {
              setP1Edit(false);
            }}
          />
        )}
      </div>

      <label>update</label>
      <input
        type="button"
        value="עדכון"
        onClick={() => {
          console.log(aboutData);
          saveAboutData();
        }}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    about: state.about,
  };
};
export default connect(mapStateToProps, { putAboutAction })(AboutEdit);

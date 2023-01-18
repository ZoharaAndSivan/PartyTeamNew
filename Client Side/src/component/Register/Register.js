import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { addUserAction } from "../../action/Customer";
import "./Register.css";
const Register = (props) => {
  let nav = useNavigate();
  let r = {
    name: "",
    email: "",
    password: "",
    passwordVerification: "",
    phoneNumber: "",
    status: 2,
    approve: true,
    image: "",
  };
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    if (type === "password" && value.length === 8) value = +value;
    r[name] = value;
  };
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    password: false,
  });
  const validate = () => {
    const validName = new RegExp("^[a-zA-Z0-9._:$!%-]$");
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    const validPassword = new RegExp(
      "/(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[]{}-_+=~`|:;\"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/"
    );
    const validPhone = new RegExp("^[0-9].{10}");

    if (validName.test(r.name) == false) {
      const newErrors = { ...errors };
      newErrors["name"] = true;
      setErrors(newErrors);
      return false;
    }
    if (validEmail.test(r.email) == false) {
      const newErrors = { ...errors };
      newErrors["email"] = true;
      setErrors(newErrors);
      return false;
    }
    if (validPassword.test(r.password) == false) {
      const newErrors = { ...errors };
      newErrors["password"] = true;
      setErrors(newErrors);
      return false;
    }
    if (validPhone.test(r.phoneNumber) == false) {
      const newErrors = { ...errors };
      newErrors["phoneNumber"] = true;
      setErrors(newErrors);
      return false;
    }
  };
  const addUser = () => {
    if (!validate()) return;
    props.addUserAction(r);
    nav("/homepage");
  };
  return (
    <>
      <h1>הרשמה</h1>
      <div>
        <form role="form">
          <div className="form-group">
            <label>שם משתמש</label>
            <br />
            <input
              type="text"
              name="name"
              // className="form-control"
              placeholder="הכנס שם משתמש"
              required
              onChange={change}
            />
          </div>
          <div className="form-group">
            <label>מייל</label>
            <br />
            <input
              type="email"
              name="email"
              // className="form-control"
              placeholder="הכנס מייל"
              required
              onChange={change}
            />
          </div>
          <div className="form-group">
            <label>סיסמא</label>
            <br />
            <input
              type="password"
              name="password"
              // className="form-control"
              placeholder="הכנס סיסמא"
              onChange={change}
            />
          </div>
          <div className="form-group">
            <label>אימות סיסמא</label>
            <br />
            <input
              type="password"
              name="passwordVerification"
              // className="-formcontrol"
              placeholder="הכנס בשנית סיסמא"
              onChange={change}
            />
          </div>
          <div className="form-group">
            <label>טלפון</label>
            <br />
            <input
              type="phone"
              name="phone"
              // className="form-control"
              placeholder="הכנס טלפון"
              onChange={change}
            />
          </div>
          {/* <div className="form-group">
            <label>הוסף תמונה</label><br/>
            <input
              type="file"
              name="Image"
              placeholder="הוסף תמונה"
              onChange={change}
            />
          </div> */}
          <button type="submit" className="btn " onClick={addUser}>
            הרשם
          </button>
        </form>
      </div>
    </>
  );
};
export default connect(null, { addUserAction })(Register);

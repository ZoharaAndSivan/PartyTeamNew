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
  let name = true;
  let email = true;
  let phoneNumber = true;
  let password = true;
  let isSame = true;
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    if (type === "password" && value.length === 8) value = +value;
    r[name] = value;
  };
  const validation = (r) => {
    if (r.name.length == 0 || r.name < 2) {
      alert("unvalid name");
      name = false;
    }
    if (r.phoneNumber < 10 || r.phoneNumber > 10) {
      alert("unvalid phone number");
      phoneNumber = false;
    }
    if (r.email.length == 0 || r.email > 6) {
      alert("unvalid email");
      email = false;
    }
    if (
      r.password.contain("/'") ||
      r.password.contain("/") ||
      r.password.length < 8 ||
      !r.password.contain("@") ||
      !r.password.contain(".") ||
      r.password.findIndex("@") != 4
    ) {
      alert(
        "A valid password should contain 8 characters. numbers and letters."
      );
      password = false;
    }
    if (r.password != r.passwordVerification) {
      alert("Passwords are not the same");
      isSame = false;
    }
  };
  const addUser = () => {
    validation();
    if (
      name &&
      password &&
      email &&
      phoneNumber &&
      r.name &&
      r.phoneNumber &&
      r.email &&
      r.password &&
      isSame
    ) {
      props.addUserAction(r);
      nav("/homepage");
    } else {
      alert("check");
    }
  };
  return (
    <>
      <h1>הרשמה</h1>
      <div>
        <form role="form">
          <div className="form-group">
            <label>שם משתמש</label><br/>
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
            <label>מייל</label><br/>
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
            <label>סיסמא</label><br/>
            <input
              type="password"
              name="password"
              // className="form-control"
              placeholder="הכנס סיסמא"
              onChange={change}
            />
          </div>
          <div className="form-group">
            <label>אימות סיסמא</label><br/>
            <input
              type="password"
              name="passwordVerification"
              // className="-formcontrol"
              placeholder="הכנס בשנית סיסמא"
              onChange={change}
            />
          </div>
          <div className="form-group">
            <label>טלפון</label><br/>
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

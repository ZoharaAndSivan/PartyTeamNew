import { useNavigate } from "react-router";
import "./Login.css";
import { logInAction } from "../../action/Customer";
import { connect } from "react-redux";

const Login = (props) => {
  let nav = useNavigate();
  let l = {
    password: "",
    email: "",
  };

  const change = (e) => {
    let { name, value, type } = e.target;
    // if (type === "number")
    //     value = +value;
    //     if(type==="password" && value.length===8)
    //       value = +value;
    l[name] = value;
  };

  const logIn = (event) => {
    event.preventDefault();
    if (!l.email) alert("Please enter email address");
    if (!l.password) alert("Please enter password");
    if (l.email && l.password) {
      props.logInAction(l.email, l.password);
      nav("/");
    }
  };

  // if (props.currentType == 1) nav("/managerNavBar");
  // else nav("/homePage");

  return (
    <>
      <h1>התחברות</h1>
      <form role="form">
        {/* <div class="form-group">
                    <label>שם משתמש</label>
                    <input type="text" name="name" class="form-control" placeholder="הכנס שם משתמש" />
                </div> */}
        <div className="form-group">
          <label>מייל</label><br/>
          <input
            type="email"
            name="email"
            // className="form-control"
            placeholder="הכנס מייל"
            required
            onChange={(event) => change(event)}
          />
        </div>
        <div className="form-group">
          <label>סיסמא</label><br/>
          <input
            type="password"
            name="password"
            // className="form-control"
            placeholder="הכנס סיסמא"
            required
            onChange={(event) => change(event)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            logIn(e);
          }}
        >
          התחבר
        </button>
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currentType: state.currentType,
  };
};
export default connect(mapStateToProps, { logInAction })(Login);

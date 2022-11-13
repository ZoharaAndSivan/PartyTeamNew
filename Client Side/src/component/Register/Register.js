import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { addUserAction } from "../../action/action";
import "./Register";
const Register = (props) => {
  let nav = useNavigate();
  let r = {
    id: null,
    name: "",
    email: "",
    passWord: "",
    phoneNumber: "",
    status: "",
    approve: true,
    houseNum: 0,
    image: "",
  };
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    if (type === "password" && value.length === 8) value = +value;
    r[name] = value;
  };
  const addUser = (r) => {
    r.status = 0;
    props.addUserAction(r);
    nav("/homepage");
  };
  return (
    <>
      <h1>הרשמה</h1>
      <form role="form">
        {/* <div class="form-group">
                     <label>id </label>
                    <input type="number" name="id" class="form-control" placeholder="הכנס id " onChange={change} /> 
                </div>  */}
        <div class="form-group">
          <label>שם משתמש</label>
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="הכנס שם משתמש"
            onChange={change}
          />
        </div>
        <div class="form-group">
          <label>מייל</label>
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="הכנס מייל"
            onChange={change}
          />
        </div>
        <div class="form-group">
          <label>סיסמא</label>
          <input
            type="password"
            name="password"
            class="form-control"
            placeholder="הכנס סיסמא"
            onChange={change}
          />
        </div>
        <div class="form-group">
          <label>אימות סיסמא</label>
          <input
            type="password"
            name="password"
            class="form-control"
            placeholder="הכנס בשנית סיסמא"
            onChange={change}
          />
        </div>
        <div class="form-group">
          <label>טלפון</label>
          <input
            type="phone"
            name="phone"
            class="form-control"
            placeholder="הכנס טלפון"
            onChange={change}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputFile">הוסף תמונה</label>
          <input
            type="text"
            name="image"
            placeholder="הוסף תמונה"
            onChange={change}
          />
          {/* <p class="help-block">Example block-level help text here.</p> */}
        </div>
        <button
          type="submit"
          class="btn btn-default"
          onClick={() => {
            addUser(r);
          }}
        >
          הירשם
        </button>
      </form>
    </>
  );
};
export default connect(null, { addUserAction })(Register);

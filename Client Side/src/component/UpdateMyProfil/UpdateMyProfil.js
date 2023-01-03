import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserAction } from "../../action/Customer";

const UpdateMyProfil = (props) => {
  let nav = useNavigate();
  let user = props.currentUser;
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    if (type === "password" && value.length === 8) value = +value;
    user[name] = value;
  };
  const updateUser = (r) => {
    props.updateUserAction(r);
    nav("/homepage");
  };
  return (
    <>
      <h1>פרטי משתמש</h1>
      <form role="form">
        <div className="form-group">
          <img src={user.Image} ></img>
          <label>שם משתמש</label><br/>
          <input
            type="text"
            name="Name"
            // className="form-control"
            placeholder="שינוי שם משתמש"
            onChange={change}
            defaultValue={user.Name}
          />
        </div>
        <div className="form-group">
          <label>מייל</label><br/>
          <input
            type="email"
            name="Email"
            // className="form-control"
            placeholder="שינוי מייל"
            onChange={change}
            defaultValue={user.Email}
          />
        </div>
        <div className="form-group">
          <label>סיסמא</label><br/>
          <input
            type="password"
            name="Password"
            // className="form-control"
            placeholder="שינוי סיסמא"
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>אימות סיסמא</label><br/>
          <input
            type="password"
            name="Password"
            // className="form-control"
            placeholder="הכנס בשנית סיסמא"
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>טלפון</label><br/>
          <input
            type="phone"
            name="Phone"
            // className="form-control"
            placeholder="הכנס מספר טלפון"
            onChange={change}
            defaultValue={user.Phone}
          />
        </div>
        {/* <div className="form-group">
          <label>החלף תמונה</label><br/>
          <input
            type="file"
            name="image"
            placeholder="הוסף תמונה"
            onChange={change}
            // defaultValue={user.Image}
          />
        </div> */}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            updateUser(user);
            console.log(user);
          }}
        >
          הירשם
        </button>
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { updateUserAction })(UpdateMyProfil);

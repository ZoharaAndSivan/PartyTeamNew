import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUserAction } from "../../action/action";

const UpdateMyProfil = (props) => {
    let nav = useNavigate();
    const {id} = useParams();
    let user = {...props.users.find(x => x.id == id)};
    let r = {
        id: user.id,
        name: "",
        email: "",
        passWord: "",
        phoneNumber: "",
        status: "",
        approve: true,
        houseNum: 0,
        image: ""
    }
    const change = (e) => {
        let { name, value, type } = e.target;
        if (type === "number")
            value = +value;
        if (type === "password" && value.length === 8)
            value = +value;
        r[name] = value;
    }
    const updateUser = (r) => {
        props.updateUserAction(r);
        nav("/homepage");
    }
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
                    <input type="text" name="name" class="form-control" placeholder="שינוי שם משתמש" onChange={change} defaultValue={user.name}/>
                </div>
                <div class="form-group">
                    <label>מייל</label>
                    <input type="email" name="email" class="form-control" placeholder="שינוי מייל" onChange={change} defaultValue={user.email}/>
                </div>
                <div class="form-group">
                    <label>סיסמא</label>
                    <input type="password" name="password" class="form-control" placeholder="שינוי סיסמא" onChange={change} />
                </div>
                <div class="form-group">
                    <label>אימות סיסמא</label>
                    <input type="password" name="password" class="form-control" placeholder="הכנס בשנית סיסמא" onChange={change} />
                </div>
                <div class="form-group">
                    <label>טלפון</label>
                    <input type="phone" name="phone" class="form-control" placeholder="החלף מספר טלפון" onChange={change} defaultValue={user.phoneNumber}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputFile">החלף תמונה</label>
                    <input type="text" name="image" placeholder="הוסף תמונה" onChange={change} defaultValue={user.image}/>
                    {/* <p class="help-block">Example block-level help text here.</p> */}
                </div>
                <button type="submit" class="btn btn-default" onClick={() => { updateUser(r) }}>הירשם</button>
            </form>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps,{updateUserAction} )(UpdateMyProfil);
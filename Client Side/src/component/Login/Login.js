import { useNavigate } from 'react-router';
import "./Login.css";
import { logInAction } from "../../action/action";
import { connect } from 'react-redux';


const Login = (props) => {

    let nav = useNavigate();
    let l = {
        password: "",
        email: ""
    }
    const change = (e) => {
        let { name, value, type } = e.target;
        // if (type === "number")
        //     value = +value;
        //     if(type==="password" && value.length===8)
        //       value = +value;
        l[name] = value;
    }

    const logIn = (event) => {
        event.preventDefault()
        console.log(l.email);
        console.log(l.password);
        props.logInAction(l.email, l.password)

        // nav("/homePage");
    }

    if (props.custumer) {
        if (props.custumer.Status == 1)
            nav("/managerHomePage");
        else
            nav("/homePage")
    }
    return (
        <>
            <h1>התחברות</h1>
            <form role="form">
                {/* <div class="form-group">
                    <label>שם משתמש</label>
                    <input type="text" name="name" class="form-control" placeholder="הכנס שם משתמש" />
                </div> */}
                <div class="form-group">
                    <label>מייל</label>
                    <input type="email" name="email" class="form-control" placeholder="הכנס מייל" onChange={(event) => change(event)} />
                </div>
                <div class="form-group">
                    <label>סיסמא</label>
                    <input type="password" name="password" class="form-control" placeholder="הכנס סיסמא" onChange={(event) => change(event)} />
                </div>
                <button type="submit" class="btn btn-default" onClick={(e) => { logIn(e) }}>התחבר</button>
            </form>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        custumer: state.currentUser
    }
}
export default connect(mapStateToProps, { logInAction })(Login);
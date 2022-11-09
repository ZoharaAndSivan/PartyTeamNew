import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import "./AddEvent.css";
import { getListByTypeAction, addEventLevelOneAction } from "../../action/action";

const AddEvent = (props) => {
    let nav = useNavigate();
    let l = {
        name: "",
        address: "",
        date: "",
        startHour: ""
    }
    const change = (e) => {
        let { name, value, type } = e.target;
        if (type === "number")
            value = +value;
        if (type === "password" && value.length === 8)
            value = +value;
        l[name] = value;
    }
    const add = (event) => {
        event.preventDefault()
        console.log(l.name);
        console.log(l.address);
        console.log(l.date);
        console.log(l.startHour);

        props.addEventLevelOneAction(l.name, l.address, l.date, l.startHour);

        nav("/addParticipate")
    }
    return (
        <>
            <h2> 4 / 1</h2>
            <h4> פרטי אירוע </h4>
            {/* להוסיף תנאי שאם ההמתמש עוד לא נרשם לאתר אז יישלח לטופס ההרשמה */}
            {/* props.customer==null&&<Register> */}
            <form role="form">
                <div className="form-group" >
                    <label>סוג אירוע</label>
                    <select className="form-control">
                        {props.categories.map(c =>
                            <option> {c.Name}</option>
                        )}
                    </select>
                    {/* <option>ברית</option>
                        <option>בריתה</option>
                        <option>מסיבת שחרור</option>
                        <option>מסיבת גיוס</option>
                        <option>בת מצווה</option> */}

                </div>
                <div className="form-group">
                    <label>שם אירוע</label>
                    <input type="name" name="name" className="form-control" placeholder="הכנס שם אירוע" onChange={(event) => change(event)} />
                </div>
                <div className="form-group">
                    <label>כתובת </label>
                    <input type="address" name="address" className="form-control" placeholder="הכנס כתובת" onChange={(event) => change(event)} />
                </div>
                <div className="form-group">
                    <label>תאריך </label>
                    <input type="date" name="date" className="form-control" placeholder="הכנס תאריך" onChange={(event) => change(event)} />
                </div>
                {/* הייתי רוצה לאחר מכן התצוגה של פרטי האירוע אז למשתתפים התאריך יופיע יותר יפה -כמו בהזמנה  */}
                <div className="form-group">
                    <label>שעת התחלה </label>
                    <input type="startHour" name="startHour" className="form-control" placeholder="הכנס שעת התחלה" onChange={(event) => change(event)} />
                </div>
                {/*  קומ]וננטה אחרת -----אך ןרק אם מילא את כל הפרטים כאן תופעל פונקצייה בלחיצה שתשלח לשלב הבא */}
                <button type="submit" className="btn btn-default" onClick={(e) => { add(e) }}   >המשך</button>
            </form>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        //  currentType: state.currentType
    }
}
export default connect(mapStateToProps, { getListByTypeAction, addEventLevelOneAction })(AddEvent);
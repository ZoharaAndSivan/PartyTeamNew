import { useNavigate } from 'react-router';
import { useRef } from "react";
import { useEffect, useState } from "react"

const AddParticipate = () => {
    let nav = useNavigate();

    //הולך לפונקצייה המוסיפה את המשתתף
    let nameInput = useRef(null);
    let emailInput = useRef(null);
    let phoneInput = useRef(null);

    let fakeParticipate = useState([
        { name: "מיכל", email: "fdgf@fdg", phoneNumber: "052928937" },
        { name: "תמר", email: "dh@fdsg", phoneNumber: "0583218593" },
        { name: "זוהרה", email: "bgf@gfdh", phoneNumber: "0524975316" },
        { name: "סיוון", email: "hgfjn@fdg", phoneNumber: "0539754159" }
    ]
    );
    const addParticipate = () => {
        let part = { name: nameInput.current.value, email: emailInput.current.value, phoneNumber: phoneInput.current.value }
        fakeParticipate = [...fakeParticipate, part];
        nameInput.current.value = "";
        emailInput.current.value = "";
        phoneInput.current.value = "";
        console.log(fakeParticipate);
        alert("משתתף זה התווסף");
    }
    const addParticipate2 = () => {
        addParticipate();
        nav("/addItem");
    }
    return (
        <>
            <h2>4 / 2</h2>
            <h4> הוספת משתתפים</h4>
            <form role="form">
                <div className="form-group">
                    <label>שם משתמש</label>
                    <input type="text" name="name" className="form-control" placeholder="הכנס שם משתמש" ref={nameInput}/>
                </div>
                <div className="form-group">
                    <label>מייל</label>
                    <input type="email" name="mail" className="form-control" placeholder="הכנס מייל" ref={emailInput}/>
                </div>
                <div className="form-group">
                    <label>טלפון</label>
                    <input type="phone" name="phone" className="form-control" placeholder="הכנס טלפון" ref={phoneInput}/>
                </div>
                <button type="button" className="btn btn-default" onClick={addParticipate}>+</button><br />
                <button type="button" className="btn btn-default" onClick={addParticipate2}>המשך</button>
            </form>
        </>
    )
}
export default AddParticipate;
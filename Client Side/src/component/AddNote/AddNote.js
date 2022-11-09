import { useNavigate } from 'react-router';
import { useRef, useState } from "react";
const AddNote = () => {

    let fakeNote = useState([
        { note: "זה לא מאוחר מדי?" },
        { note: " כמה כסף צריך להביא ?" },

    ]
    );
    let nav = useNavigate();
    let textInput = useRef(null);

    const addNote = () => {
        let note = { note: textInput.current.value }
        fakeNote = [...fakeNote, note];
        textInput.current.value = "";
        console.log(fakeNote);
        alert("האירוע נוצר בהצלחה");
        nav("/myEvent")
    }

    return (
        <>
            <h2>4 / 4</h2>
            <h4>הוספת הערה</h4> 
            <textarea className="form-control" maxLength="1000" placeholder="הוסף הערה" ref={textInput}></textarea>        
            <input type="button" value="סיום" onClick={addNote} />
        </>
    )
}
export default AddNote;

import { useNavigate } from 'react-router';
import { useRef ,useState, useEffect} from "react";
const Note = () => {
    const [note, setNote] = useState([]);

useEffect(() => {
    //כאן אמורה להיות קריאה לשרת
    
    let fakeNote=  [
        {note:"זה לא מאוחר מדי?"},
        {note:" כמה כסף צריך להביא ?"},

      ];
      setNote(fakeNote);
}, [])
let nav = useNavigate();


    return (
        <>
         
            <h1>הערות משתתפי האירוע</h1>
            <div className="card">
                <p>
                    {note.map((item) => { return  <ul key={item.id} ><li>{item.note} </li>  </ul> })}
                </p>

            </div>
     

        </>
    )
}
export default Note;

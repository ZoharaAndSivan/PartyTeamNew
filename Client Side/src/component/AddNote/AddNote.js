import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { AddNoteAction } from "../../action/NoteEvent";

const AddNote = (props) => {
  let nav = useNavigate();
  let text = {
    data: "",
    CelebrationId: props.cel
  };
  const change = (e) => {
    let { name, value } = e.target;
    text[name] = value;
  };
  const addNote = (note) => {
    props.AddNoteAction(note);
    alert("האירוע נוצר בהצלחה");
    console.log(text);
    nav("/homePage");
  };

  return (
    <>
      <h4>הוספת הערה</h4>
      <textarea
        className="form-control"
        maxLength="1000"
        placeholder="הוסף הערה"
        name="data"
        onChange={change}
      ></textarea>
      <input
        type="button"
        value="סיום"
        onClick={() => {
          addNote(text.data);
        }}
      />
    </>
  );
};  
const mapStateToProps = (state) => {
  return {
    cel: state.currentEvent
  };
};
export default connect(mapStateToProps, { AddNoteAction })(AddNote);

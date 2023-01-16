import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { AddNoteAction } from "../../action/NoteEvent";

const AddNote = (props) => {
  let nav = useNavigate();
  let text = {
    Note: "",
    CelebrationId: props.item.Id,
    ToShow: false,
  };
  const change = (e) => {
    let { name, value } = e.target;
    text[name] = value;
  };
  const show = () => {
    console.log("hi i'm in show");
    text.ToShow = true;
  };
  const addNote = (note) => {
    text.Note = note;
    console.log(text);
    props.AddNoteAction(text); 
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
      <label>To show to everybody?</label>
      <input type="checkbox" onChange={show} />
      <br/>
      <input
        type="button"
        value="הוסף"
        onClick={() => {
          addNote(text.data);
        }}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cel: state.currentEvent,
  };
};
export default connect(mapStateToProps, { AddNoteAction })(AddNote);

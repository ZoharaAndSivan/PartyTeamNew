import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { connect } from "react-redux";
import { GetNoteAction } from "../../action/NoteEvent";
const Note = (props) => {
  let {id} = useParams();
  useEffect(() => {
    props.GetNoteAction(id);
  }, []);
  let nav = useNavigate();

  return (
    <>
      <h1>הערות משתתפי האירוע</h1>
      <div className="card">
        <p>
          {props.noteEvent.map((item) => {
            return (
              <ul key={item.Id}>
                <li>{item.Note} </li>{" "}
              </ul>
            );
          })}
        </p>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    noteEvent: state.noteEvent,
  };
};
export default connect(mapStateToProps, { GetNoteAction })(Note);

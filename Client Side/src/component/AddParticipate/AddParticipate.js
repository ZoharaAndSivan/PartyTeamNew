import { Button, Fab, TextField } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Post } from "../../action/CustomerOfEvent";
import AddIcon from '@mui/icons-material/Add';

const AddParticipate = (props) => {
  let nav = useNavigate();
  let participate = {
    Name: "",
    Email: "",
    Phone: "",
    CelebrationId: props.cel,
    Status: false,
  };
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    participate[name] = value;
  };
  const addParticipate = () => {
    props.Post(participate);
  };
  const addParticipate2 = () => {
    addParticipate();
    alert("האירוע נוצר בהצלחה");
    nav("/homePage");
  };
  return (
    <>
      <h2>2 / 2</h2>
      <h4> הוספת משתתפים</h4>
      <form role="form">

      <TextField name="Name" id="outlined-basic" label="שם משתתף" variant="outlined" onChange={change} />
      <TextField name="Email" type="email" id="outlined-basic" label="מייל" variant="outlined" onChange={change} />
      <TextField name="Phone" id="outlined-basic" label="טלפון" variant="outlined" onChange={change} />

      
      <Button   variant="contained"  onClick={addParticipate}>
      <Fab color="primary" aria-label="add">
        <AddIcon  />
      </Fab>
  </Button>
        {/* <button
          type="button"
          className="btn btn-default"
          onClick={addParticipate}
        >
          +
        </button> */}
        <br />
        {/* <div className="form-group">
          <label>מייל</label>
          <input
            type="email"
            name="Email"
            className="form-control"
            placeholder="הכנס מייל"
            onChange={change}
          />
        </div> */}
          <Button variant="contained"  onClick={addParticipate2}>
          המשך
  </Button>
     
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cel: state.currentEvent,
  };
};
export default connect(mapStateToProps, { Post })(AddParticipate);
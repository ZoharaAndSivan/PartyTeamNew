import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { AddItemToEvent } from "../../action/ItemToEvent";
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const AddItem = (props) => {
  let nav = useNavigate();
  let item = {
    Name: "",
    Amount: "",
    Describe: "",
    Price: null,
  };
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    item[name] = value;
  };
  const addItem = (item) => {
    props.AddItemToEvent(item);
  };

  const addItem2 = () => {
    addItem();
    nav("/addNote");
  };
  return (
    <>
      <h2>4 / 3</h2>
      <h4>הוספת פריטים</h4>
      <form role="form">
      <TextField name="Name" id="outlined-basic" label="שם המוצר" variant="outlined" onChange={change} /><br/><br/>
      <TextField name="Amount" type="number" id="outlined-basic" label="כמות" variant="outlined" onChange={change} /><br/><br/>
      <TextField name="Decribe" id="outlined-basic" label="תיאור" variant="outlined" onChange={change} /><br/><br/>

        <p>טיפ מיוחד! אפשרות להוסיף מחיר משוער לכל פריט </p>

        <TextField name="Price" type="number" id="outlined-basic" label="מחיר ליחידה" variant="outlined" onChange={change} /><br/><br/>
 
        <Button   variant="contained"  onClick={(e) => addItem(e)}>
          +
        </Button>

        <br />
        <Button  type="submit" variant="contained" size="large" onClick={() => addItem2()}>
        המשך
      </Button>
    
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    
  };
};
export default connect(mapStateToProps, {AddItemToEvent})(AddItem);

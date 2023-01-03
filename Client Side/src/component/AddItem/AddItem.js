import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { AddItemToEvent } from "../../action/ItemToEvent";
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
        <div class="form-group">
          <label>שם מוצר</label>
          <input
            type="text"
            name="Name"
            class="form-control"
            placeholder="הכנס שם מוצר"
            onChange={change}
          />
        </div>
        <div class="form-group">
          <label>כמות</label>
          <input
            type="amount"
            name="amount"
            class="form-control"
            placeholder="הכנס כמות"
            onChange={change}
          />
        </div>
        <div class="form-group">
          <label>תיאור</label>
          <input
            type="text"
            name="Decribe"
            class="form-control"
            placeholder="הכנס תיאור"
            onChange={change}
          />
        </div>
        <p>טיפ מיוחד! אפשרות להוסיף מחיר משוער לכל פריט </p>
        <div class="form-group">
          <label>מחיר ליחידה</label>
          <input
            type="number"
            name="Price"
            class="form-control"
            placeholder="הכנס מחיר"
            onChange={change}
          />
        </div>
        <button
          type="button"
          class="btn btn-default"
          onClick={(e) => addItem(e)}
        >
          +
        </button>
        <br />
        <button
          type="button"
          class="btn btn-default"
          onClick={() => addItem2()}
        >
          המשך
        </button>
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    
  };
};
export default connect(mapStateToProps, {AddItemToEvent})(AddItem);

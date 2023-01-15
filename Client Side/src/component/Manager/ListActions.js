import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteRowAction,
  getListByTypeAction,
  addRecord,
} from "../../action/ItemOfList";
import { PutList } from "../../action/TypeEvent";

const ListActions = (props) => {
  let { id } = useParams();
  let list = { ...props.lists.find((l) => l.Id == id) };
  console.log(list);
  let nav = useNavigate();
  useEffect(() => {
    props.getListByTypeAction(id);
  }, []);
  const del = (id) => {
    props.deleteRowAction(id);
    props.getListByTypeAction(props.itemArr[0].KindId);
  };
  let record = {
    Name: "",
    Price: 0,
    AmountOfPerson: 0,
    KindId: props.currentList,
  };
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    record[name] = value;
  };
  const changeList = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    list[name] = value;
  };
  const addRecordFunc = () => {
    console.log("hi i'm in add record");
    record.KindId = props.currentList;
    console.log(record);
    props.addRecord(record);
  };
  const edit = () => {
    nav("/editList/:" + props.currentList);
  };
  const editList = () => {
    props.PutList(list);
  };
  return (
    <>
      <h1>{list.Name}</h1>
      <input
        type="text"
        name="Name"
        placeholder="name"
        onChange={changeList}
        defaultValue={list.Name}
      />
      <input
        type="button"
        name="edit"
        value="edit"
        onChange={changeList}
        onClick={editList}
      />
      {props.itemArr ? (
        <div className="container">
          {props.itemArr.map((item) => {
            return (
              <div key={item.id} className="card">
                {
                  <ul>
                    <li>
                      {" "}
                      {item.Name} | {item.Price}{" "}
                    </li>
                    <input
                      name="deletebuttom"
                      type="button"
                      onClick={() => del(item.Id)}
                      value="Delete"
                    />
                  </ul>
                }
              </div>
            );
          })}
        </div>
      ) : null}
      <div>
        <p> הוספת רשומה</p>
        <input name="name" type="text" placeholder="שם" onChange={change} />
        <input
          name="price"
          type="number"
          placeholder="מחיר"
          onChange={change}
        />
        <input
          name="amount"
          type="number"
          placeholder="כמות"
          onChange={change}
        />
        <input type="button" value="הוסף רשומה" onClick={addRecordFunc} />
      </div>
      {props.itemArr ? (
        <input name="edit" type="button" value="esit list" onClick={edit} />
      ) : null}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    itemArr: state.itemArr,
    currentList: state.currentList,
    lists: state.lists,
  };
};
export default connect(mapStateToProps, {
  deleteRowAction,
  getListByTypeAction,
  addRecord,
  PutList,
})(ListActions);

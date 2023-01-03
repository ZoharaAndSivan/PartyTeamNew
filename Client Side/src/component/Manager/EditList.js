import { useEffect } from "react";
import { connect } from "react-redux";
import {
  putRecord,
  getListByTypeAction,
    } from "../../action/ItemOfList";

const EditList = (props) => {
  let record = {
    Name: "",
    Price: 0, 
    AmountOfPerson: 0,
  };
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = +value;
    record[name] = value;
  };
  const putRecordFunc = (e) => {
    console.log("hi i'm in put record");
    e.KindId = props.itemArr[0].KindId;
    props.putRecord(record);
  };
  return (
    <>
      <h1>הרשימה שלי עדכון</h1>
      {props.itemArr ? (
        <div className="container">
          {props.itemArr.map((item) => {
            return (
              <div key={item.id} className="card">
                {
                  <>
                    <input
                      type="text"
                      name="Name"
                      defaultValue={item.Name}
                      onChange={change}
                    />
                    <input
                      type="text"
                      name="Price"
                      defaultValue={item.Price}
                      onChange={change}
                    />
                    <input
                      type="text"
                      name="AmountOfPepole"
                      defaultValue={item.AmountOfPerson}
                      onChange={change}
                    />
                    <input type="button" value="update" onClick={putRecordFunc} />
                  </>
                }
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    itemArr: state.itemArr,
    //currentType: state.currentType
  };
};
export default connect(mapStateToProps, {
  putRecord,
  getListByTypeAction,
})(EditList);

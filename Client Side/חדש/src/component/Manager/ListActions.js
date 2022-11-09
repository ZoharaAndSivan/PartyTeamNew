import { useEffect } from "react";
import { connect } from "react-redux";
import { deleteRowAction, getListByTypeAction, addRecord } from "../../action/action";

const ListActions = (props) => {
    const del = (id) => {
        props.deleteRowAction(id);
        props.getListByTypeAction(props.itemArr[0].KindId);
    }
    let record = {
        Name: "",
        Price: 0,
        AmountOfPerson: 0,
        KindId: null
    }
    const change = (e) => {
        let { name, value, type } = e.target;
        if (type === "number")
            value = +value;
        record[name] = value;
    }
    const addRecordFunc = (e) => {
        console.log("hi i'm in add record");
        console.log(e);
        console.log(props.itemArr[0].KindId);
        e.KindId = props.itemArr[0].KindId;
        console.log(e);
        props.addRecord(e);
    }
    return (
        <>
            <h1>הרשימה שלי</h1>
            {props.itemArr ? <div className="container">
                {props.itemArr.map((item) => {
                    return <div key={item.id} className="card" >
                        {<ul>
                            <li><input type="button" onClick={() => del(item.Id)}/>delete  {item.Name} | {item.Price} </li>
                        </ul>
                        }
                    </div>
                })}
            </div> : null}
            <div>
                <input name="name" type="text" placeholder="שם" onChange={(event) => change(event)} />
                <input name="price" type="number" placeholder="מחיר" onChange={(event) => change(event)} />
                <input name="amount" type="number" placeholder="כמות" onChange={(event) => change(event)} />
                <input type="button" value="הוסף רשומה" onClick={() => { addRecordFunc(record) }}/> 
            </div>

        </>
    )
}
const mapStateToProps = (state) => {
    return {
        itemArr: state.itemArr
        //currentType: state.currentType

    }
}
export default connect(mapStateToProps, { deleteRowAction, getListByTypeAction, addRecord })(ListActions);
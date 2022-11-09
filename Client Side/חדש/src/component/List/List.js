import "./List.css";
import { useEffect } from "react";
import { connect } from "react-redux";
//import { getListByTypeAction } from "../../action/list";

const List = (props) => {
    return (
        <>
            <h1>הרשימה שלי</h1>
            {props.itemArr ? <div className="container">
                {props.itemArr.map((item) => {
                    return <div key={item.id} className="card" >
                        {<ul>
                            <li><input name="choose" type= "checkbox"/> {item.Name} | {item.Price} </li>
                        </ul>
                        }
                    </div>
                })}
            </div> : null}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        itemArr: state.itemArr,
        currentType: state.currentType
    }
}
export default connect(mapStateToProps, {})(List);
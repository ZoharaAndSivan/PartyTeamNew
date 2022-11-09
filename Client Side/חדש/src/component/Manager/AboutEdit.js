import About from "../About/About";
import { putAboutAction} from "../../action/action";
import { connect } from "react-redux";

const AboutEdit = () => {
    let a = {
        id: null,
        content:""
    }
    let flag=false;
    const change = (e) => {
        let { name, value } = e.target;
        a[name] = value;
    }
    let edit = () => {
       flag=true;
    }
    return (<>
        <h1>About Page Manager</h1>
        
         <About/>
         
         <input type="button" value="עדכון" onClick={edit}/>

         {flag==true?<input type="text" placeholder="עוד עלינו" onChange={change}/>:null}
       
    </>
    )
}
const mapStateToProps = (state) => {
    return {
        //itemArr: state.itemArr
        //currentType: state.currentType

    }
}
export default connect(mapStateToProps, { putAboutAction })(AboutEdit);
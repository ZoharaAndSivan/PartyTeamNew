import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ourlogo from "../../component/NavBar/partyteam.png";
import { getListByTypeAction } from "../../action/action";

function MangerNavbar(props) {
    const nav = useNavigate();

    const goToList = (listType) => {
        props.getListByTypeAction(listType);
    }
    return (
        <>
            <div><a href="managerHomePage"><img src={ourlogo} alt="managerHomePage" /></a></div>

            <nav className="navv">
                <div className="wraps">
                    <div className="aas"><Link to="eventApprovals" className="dropbtn">אישורי אירועים </Link></div>
                    {props.categories.map(c =>
                        <div className="dropdown">
                            <button className="dropbtn"> {c.Name}</button>
                            <div className="dropdown-content">
                                {c.typeEvents.length != 0 && c.typeEvents.map(te =>
                                    <Link to="/listActions" onClick={() => {  goToList(te.Id) }}>{te.Name} </Link>)
                                }
                            </div>
                        </div>
                    )}
                    <div className="aas"><Link to="aboutedit" className="dropbtn">אודות </Link></div>
                    <div className="dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                        <div className="dropdown-content">
                            <Link to="exit" className="d">יציאה</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        currentType: state.currentType,
        user: state.currentUser
    }
}
export default connect(mapStateToProps, { getListByTypeAction })(MangerNavbar);
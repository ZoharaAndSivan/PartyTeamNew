import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import ourlogo from "./partyteam.png";
import { getListByTypeAction } from "../../action/ItemOfList";
import { logOut } from "../../action/Customer";
import { Avatar } from "@mui/material";
import { useState } from "react";

function Navbar(props) {
  const goToList = (listType) => {
    props.getListByTypeAction(listType);
  };
  const exit = () => {
    props.logOut();
    nav("/homepage");
  };
  let nav = useNavigate();
  return (
    <>
      <div>
        <a href="homePage">
          <img src={ourlogo} alt="homePage" />
        </a>
      </div>
      <nav className="navv">
        <div className="wraps">
          {props.currentUser ? (
            <>
              <Avatar alt="Remy Sharp" src={props.currentUser.Image} />
              <div className="aas">
                <Link to="addEvent" className="dropbtn">
                  יצירת אירוע
                </Link>
              </div>
              <div className="dropdown">
                <button className="dropbtn"> האירועים שלי</button>
                <div className="dropdown-content">
                  <Link to="/createdEvents"> אירועים שלי</Link>
                  <Link to="/orderedEvents"> הזמנות לאירועים</Link>
                </div>
              </div>
            </>
          ) : null}
          {props.categories.map((c) => (
            <div className="dropdown" key={c.Id}>
              <button className="dropbtn"> {c.Name}</button>
              <div className="dropdown-content">
                {c.typeEvents.length != 0 &&
                  c.typeEvents.map((te) => (
                    <Link
                      key={te.Id}
                      to="/list"
                      onClick={() => goToList(te.Id)}
                    >
                      {te.Name}{" "}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
          <div className="aas">
            <Link to="about" className="dropbtn">
              אודות{" "}
            </Link>
          </div>
          <div className="dropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="16"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
            {props.currentUser ? (
              <button onClick={exit}>יציאה</button>
            ) : (
              <div className="dropdown-content">
                <Link to="register" className="d">
                  הרשמה
                </Link>
                <Link to="login" className="d">
                  התחברות
                </Link>{" "}
              </div>
            )}
          </div>
          {props.currentUser ? (
            <Link to="updateMyProfil"> הפרופיל שלי</Link>
          ) : null}
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { getListByTypeAction, logOut })(
  Navbar
);

import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Advert from "./component/Advert/Advert";
import AddEvent from "./component/AddEvent/AddEvent";
import MyEvent from "./component/MyEvent/MyEvent";
import About from "./component/About/About";
import Navbar from "./component/NavBar/NavBar";
import AddParticipate from "./component/AddParticipate/AddParticipate";
import AddNote from "./component/AddNote/AddNote";
import OrderedEvents from "./component/OrderedEvents/OrderedEvents";
import CreatedEvents from "./component/CreatedEvents/CreatedEvents";
import HomePage from "./component/HomePage/HomePage";
import DescribeOfEvent from "./component/DescribeOfEvent/DescribeOfEvent";
import AllDetailsForEventManager from "./component/AllDetailsForEventManager/AllDetailsForEventManager";
import Statistics from "./component/Statistics/Statistics";
import Note from "./component/Note/Note";
import List from "./component/List/List";
import EditEvent from "./component/EditEvent/EditEvent";
import EditParticipates from "./component/EditParticipates/EditParticipates";
import UpdateMyProfil from "./component/UpdateMyProfil/UpdateMyProfil";

//manager pages
import AboutEdit from "./component/Manager/AboutEdit";
import ManagerHomePage from "./component/Manager/ManagerHomePage";
import MangerNavBar from "./component/Manager/MangerNavBar";
import EventApprovals from "./component/Manager/EventApprovals";
import StaticticsManager from "./component/Manager/StaticticsManager";
import ListActions from "./component/Manager/ListActions";
import EditList from "./component/Manager/EditList";
import Category from "./component/Manager/Category";
import { connect } from "react-redux";
import { getCategoriesAction } from "./action/action";
import AllDetailsForParticpates from "./component/AllDetailsForParticipates/AllDetailsForParticipates";
function App(props) {
  useEffect(() => {
    props.getCategoriesAction();
  });
  return (
    <>
    <AddItem/>
      {props.currentType != 1 ? <Navbar /> : <MangerNavBar />}
      <AddParticipate/>
      <Routes>
        <Route path="list" element={<List />} />
        <Route path="homePage" element={<HomePage />} />
        {props.currentType != 1 ? (
          <Route path="" element={<HomePage />} />
        ) : (
          <Route path="" element={<ManagerHomePage />} />
        )}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="advert" element={<Advert />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="note/:id" element={<Note />} />
        <Route path="addEvent" element={<AddEvent />} />
        <Route path="addParticipate" element={<AddParticipate />} />
        <Route
          path="allDetailsForEventManager/:id"
          element={<AllDetailsForEventManager />}
        />
        <Route
          path="allDetailsForParticipates/:id"
          element={<AllDetailsForParticpates />}
        />
        <Route path="addNote" element={<AddNote />} />
        <Route path="orderedEvents" element={<OrderedEvents />} />
        <Route path="createdEvents" element={<CreatedEvents />} />
        <Route path="myEvent" element={<MyEvent />} />
        <Route path="editEvent/:id" element={<EditEvent />} />
        <Route path="editParticipates" element={<EditParticipates />} />
        <Route path="describeOfEvent/:id" element={<DescribeOfEvent />} />
        <Route path="about" element={<About />} />
        <Route path="updateMyProfil" element={<UpdateMyProfil />} />

        <Route path="managerNavBar" element={<MangerNavBar />} />
        <Route path="aboutedit" element={<AboutEdit />} />
        <Route path="listActions/:id" element={<ListActions />} />
        <Route path="managerHomePage" element={<ManagerHomePage />} />
        <Route path="eventApprovals" element={<EventApprovals />} />
        <Route path="statictics" element={<StaticticsManager />} />
        <Route path="editList/:id" element={<EditList/>} />
        <Route path="category/:id" element={<Category/>} />
      </Routes>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    // itemArr: state.itemArr
    currentType: state.currentType,
  };
};
export default connect(mapStateToProps, { getCategoriesAction })(App);

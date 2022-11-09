import React, { useEffect } from 'react'
import './App.css';
import { Routes, Route } from 'react-router';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Advert from './component/Advert/Advert';
import Exit from './component/Exit/Exit';
import AddEvent from './component/AddEvent/AddEvent';
import MyEvent from './component/MyEvent/MyEvent';
import About from './component/About/About';
import Navbar from './component/NavBar/NavBar';
import AddParticipate from './component/AddParticipate/AddParticipate';
import AddItem from './component/AddItem/AddItem';
import AddNote from './component/AddNote/AddNote';
import OrderedEvents from './component/OrderedEvents/OrderedEvents';
import CreatedEvents from './component/CreatedEvents/CreatedEvents';
import HomePage from './component/HomePage/HomePage';
import DescribeOfEvent from './component/DescribeOfEvent/DescribeOfEvent';
import AllDetailsForEventManager from './component/AllDetailsForEventManager/AllDetailsForEventManager';
import Statistics from './component/Statistics/Statistics';
import Note from './component/Note/Note';
import List from './component/List/List';

//manager pages
import AboutEdit from './component/Manager/AboutEdit';
import ManagerHomePage from './component/Manager/ManagerHomePage';
import MangerNavBar from './component/Manager/MangerNavBar';
import EventApprovals from './component/Manager/EventApprovals';
import ListActions from './component/Manager/ListActions';
import { connect } from 'react-redux';
import { getCategoriesAction } from "./action/action";
import UpdateMyProfil from './component/UpdateMyProfil/UpdateMyProfil';
function App(props) {
  useEffect(() => {
    props.getCategoriesAction();
  })
  return (
    <>
      {props.currentType!=1? <Navbar/>: <MangerNavBar/>} 
      
      <Routes>
        <Route path="list" element={<List />} /> 
        <Route path="homePage" element={<HomePage />} />
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="advert" element={<Advert />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="note" element={<Note />} />
        <Route path="addEvent" element={<AddEvent />} />
        <Route path="addParticipate" element={<AddParticipate />} />
        <Route path="allDetailsForEventManager/:id" element={<AllDetailsForEventManager />} />
        <Route path="addItem" element={<AddItem />} />
        <Route path="addNote" element={<AddNote />} />
        <Route path="orderedEvents" element={<OrderedEvents />} />
        <Route path="createdEvents" element={<CreatedEvents />} />
        <Route path="myEvent" element={<MyEvent />} />
        <Route path="describeOfEvent" element={<DescribeOfEvent />} />
        <Route path="about" element={<About />} />
        <Route path="exit" element={<Exit />} />
        <Route path="updateMyProfil/:id" element={<UpdateMyProfil />} />


        <Route path="aboutedit" element={<AboutEdit />} />
        <Route path="listActions" element={<ListActions />} />
        <Route path="managerHomePage" element={<ManagerHomePage />} />
        <Route path="eventApprovals" element={<EventApprovals />} />
      </Routes>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    // itemArr: state.itemArr
    currentType: state.currentType
  }
}
export default connect(mapStateToProps, { getCategoriesAction })(App);
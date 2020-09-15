import React from "react";
import { Link } from "react-router-dom";
import fire from '../../config/firebase';

import calendarImg from '../../images/googleCalendar.png';
import menuList from '../../images/menuList.jpg';
import menuCreate from '../../images/menuCreate.jpg';
import menuProfile from '../../images/menuProfile.jpg';


import MenuHeader from './MenuHeader';
import calendarData from '../Calendar/CalendarData';

class ManagementMenu extends React.Component {

  logout = () => {
    fire.auth().signOut(); 
    this.props.history.push('/')
  }

  render(){
    return (
      <div className='mainMenu'>
        <MenuHeader logout={this.logout}/>
          <div className="ui four link cards ui container mainMenuCardContainer" style={{marginTop: '12%'}}>
            <Link to="/list-menu" className="card ui container">
              <div className="image">
                <img
                  src={menuList}
                  alt="Flower and clipboard"
                />
                <h2> Ordering List</h2>
              </div>
            </Link>
            <Link to="menu-planning" className="card ui container">
              <div className="image">
                <img
                  src={menuCreate}
                  alt="Menu"
                />
                <h2 className="title">Menu Planning</h2>
              </div>
            </Link>
            < button className="card ui container googleButton " onClick={() => calendarData()}>
              <div className="image">
                <img
                  src={calendarImg}
                  alt="Google calendar"
                />
                <h2>Calendar</h2>
              </div>
            </button>
            <Link to="view-profile" className="card ui container">
              <div className="image">
                <img
                  src={menuProfile}
                  alt="restaurant tickets"
                />
                <h2 className="title">View Profile</h2>
              </div>
            </Link>
         </div>
      </div> 
    );
  }
};

export default ManagementMenu;

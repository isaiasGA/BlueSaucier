import React from "react";
import { Link } from "react-router-dom";
import fire from '../../config/firebase';

import calendarImg from '../../images/googleCalendar.png';

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
        <div className="ui four link cards ui container" style={{marginTop: '12%'}}>
        <Link to="/list-menu" className="card">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1568847811512-803314424fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              alt="Flower and clipboard"
            />
            <h2> Ordering List</h2>
          </div>
        </Link>
        <Link to="menu-planning-menu" className="card">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1568031818486-50dc2230ba10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              alt="Menu"
            />
            <h2 className="title">Menu Planning</h2>
          </div>
        </Link>
        < button className="card googleButton" onClick={() => calendarData()}>
          <div className="image">
            <img
              src={calendarImg}
              alt=""
            />
            <h2>Calendar</h2>
          </div>
        </button>
        <Link to="manage-profile" className="card">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1529003600303-bd51f39627fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              alt="order tickets"
            />
            <h2 className="title">Manage Profile</h2>
          </div>
        </Link>
      </div>
      </div> 
    );
  }
};

export default ManagementMenu;

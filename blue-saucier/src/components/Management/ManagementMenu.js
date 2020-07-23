import React from "react";
import { Link } from "react-router-dom";

import MenuHeader from './MenuHeader';

const ManagementMenu = ({name}) => {
  return (
    <div className='mainMenu'>
      <MenuHeader name={name}/>
      <div className="ui four cards" style={{margin:'7% 2%'}}>
      <Link to="/" className="card">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1568847811512-803314424fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="Flower and clipboard"
          />
          <h2> Ordering List</h2>
        </div>
      </Link>
      <Link to="/" className="card">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1568031818486-50dc2230ba10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="Menu"
          />
          <h2 className="title">Menu Planning</h2>
        </div>
      </Link>
      <Link to="/" className="card">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1529003600303-bd51f39627fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="order tickets"
          />
          <h2 className="title">Edit Profile</h2>
        </div>
      </Link>
      <Link to="/" className="card">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt=""
          />
          <h2>Calendar</h2>
        </div>
      </Link>
      <Link to="/" className="card">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1581349437898-cebbe9831942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt=""
          />
          <h2>Email</h2>
        </div>
      </Link>
    </div>
    </div> 
  );
};

export default ManagementMenu;

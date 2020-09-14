import React from 'react';
import {Link} from 'react-router-dom';
import fire from '../../config/firebase';

class MenuPlanningMenu extends React.Component {

logout = () => {
  fire.auth().signOut(); 
  this.props.history.push('/')
}
  render(){
    return(
      <div>
       <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
          <Link to ='/main-menu' className='ui button active item'>Main Menu</Link>
          <button className='ui button item' onClick={this.logout}>Log Out</button>
        </div>
       <div className='menuPlanning'>
          <div className='ui two cards menuPlanningCardContainer' style={{padding: '14% 11%', margin:'0' }}>
        <Link to ='/create-menu ' className='card ui container'>
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1561222856-eb920e4960d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              alt="notebook and pen"
            />
            <h2>Create Menu</h2>
          </div>
        </Link>
        <Link to='/view-menu' className='card ui container'>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt="clipboards"
              />
              <h2> View Menu</h2>
            </div>
          </Link>
        </div>
       </div>
      </div>
    )
  };
}

export default MenuPlanningMenu;
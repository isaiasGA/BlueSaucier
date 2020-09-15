import React from 'react';
import {Link} from 'react-router-dom';
import fire from '../../config/firebase';

import createMenuImg from '../../images/createMenuOption.jpg';
import viewMenu from '../../images/menuViewOption.jpg';

class MenuPlanningMenu extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

logout = () => {
  fire.auth().signOut(); 
  this.props.history.push('/')
}
  render(){
    return(
      <div className='menuPlanning'>
       <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
          <Link to ='/main-menu' className='ui button active item'>Main Menu</Link>
          <button className='ui button item' onClick={this.logout}>Log Out</button>
        </div>
          <div className='menuPlanningCardContainer'>
          <div className='ui two cards'>
            <button onClick={() => this.props.history.push('/create-menu')} className='card ui container' style={{cursor:'pointer', color: '#4183c4'}}>
              <div className="image">
                <img
                  src={createMenuImg}
                  alt="notebook and pen"
                />
              <h2>Create Menu</h2>
             </div>
            </button>
            <Link to='/view-menu' className='card ui container'>
              <div className="image">
                <img
                  src={viewMenu}
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
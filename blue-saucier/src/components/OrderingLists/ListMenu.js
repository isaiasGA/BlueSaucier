import React from 'react';
import {Link} from 'react-router-dom';
import fire from '../../config/firebase';

import createListImg from '../../images/menuCreateList.jpg';
import viewListImg from '../../images/menuViewList.jpg';

class ListMenu extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  logout = () => {
    fire.auth().signOut(); 
    this.props.history.push('/')
  }

  render(){
    return(
      <div className='listMenu'>
       <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
          <Link to ='/main-menu' className='ui button active item'>Main Menu</Link>
          <button className='ui button item' onClick={this.logout}>Log Out</button>
        </div>
         <div className='listMenuCardContainer'>
          <div className='ui two cards'>
              <Link to ='/create-lists' className='card ui container'>
                <div className="image">
                  <img
                    src={createListImg}
                    alt="cooking ingredients"
                  />
                  <h2> Create List </h2>
                </div>
              </Link>
              <Link to='/view-lists' className='card ui container'>
                <div className="image">
                  <img
                    src={viewListImg}
                    alt="spices"
                  />
                  <h2> View Lists</h2>
                </div>
              </Link>
            </div>
         </div>
       </div>
    );
  }
}

export default ListMenu;
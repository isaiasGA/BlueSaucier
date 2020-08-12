import React from 'react';
import {Link} from 'react-router-dom';
import fire from '../../config/firebase';

class ListMenu extends React.Component {

  
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

       <div className='listMenu'>
          <div className='ui two cards ui container' style={{padding: '14% 11%', margin:'0' }}>
        <Link to ='/create-lists' className='card'>
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1504632236107-4ae29a44f388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="notebook and pen"
            />
            <h2> Create List </h2>
          </div>
        </Link>
          <Link to='/view-lists' className='card'>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1517499414974-3b42addf2d86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                alt="clipboards"
              />
              <h2> View Lists</h2>
            </div>
          </Link>
        </div>
       </div>
      </div>
    )
  }
}

export default ListMenu;
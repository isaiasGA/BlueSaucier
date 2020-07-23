import React from 'react';
import fire from '../../config/firebase';

class MenuHeader extends React.Component {
  state = {date: '', time:''}

  componentDidMount(){
    setInterval(() => {
      this.setState({ date: new Date().toDateString() });
    }, 1000)

    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000)
  }

  logout=() => {
    fire.auth().signOut(); 
  }

  render(){
    return (
      <div>
        <div className='ui inverted segment'>
          <div className='ui button' onClick={this.logout}>Log Out</div>
          <h2>Hi, {this.props.name}</h2>
          <h3>{this.state.date}</h3>
          <h3>{this.state.time}</h3>
        </div>
      </div>
      )
    }
};


export default MenuHeader;
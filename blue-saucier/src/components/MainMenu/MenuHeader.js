import React from 'react';
import fire from '../../config/firebase';

class MenuHeader extends React.Component {
  state = {date: '', time:'', userName: {} }

  componentDidMount(){
     this.dateInfo = setInterval(() => {
      this.setState({ date: new Date().toDateString() });
    }, 1000)

    this.timeInfo = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000)

    this.authListener();
  }

  componentWillUnmount(){
    this.user();
    clearInterval(this.dateInfo);
    clearInterval(this.timeInfo);

  }

 

  authListener() {
     this.user = fire.auth().onAuthStateChanged(userName => {
      if (userName) { this.setState({ userName }) }
    });
  }

  render(){
    return (
       <div>
        <div className='ui inverted segment'>
          <div className='ui button' onClick={this.props.logout} style={{position: 'absolute', marginLeft: '91%'}}>Log Out</div>
          <div className='welcomeDisplay'>
          <h1>Hello, {this.state.userName.displayName}</h1>
          <h3>Today's date: &ensp;{this.state.date}</h3>
          <h3>Current time: &ensp;{this.state.time}</h3>
          </div>
        </div>
      </div>
      )
    }
};


export default MenuHeader;
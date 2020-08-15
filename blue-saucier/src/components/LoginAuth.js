import React from "react";
import fire from "../config/firebase";

import Login from './LogIn';
import ManagementMenu from './Management/ManagementMenu';

class LoginAuth extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    this.authListener();
  }

  componentWillUnmount(){
    this.authUser();
  }


  authListener() {
    this.authUser = fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div>{this.state.user ? < ManagementMenu/> : <Login/>}</div>;
  }
}

export default LoginAuth;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home';
import SignUp from './components/SignUp';
import LoginAuth from './components/LoginAuth';
import LogIn from './components/LogIn';
import ManagementMenu from './components/Management/ManagementMenu';

class App extends React.Component {
 
  render(){
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path='/main-menu'component={ManagementMenu} />
              <Route path='/sign-up' component={SignUp}/>
              <Route path='/log-in' component={LogIn}/>
              <Route path='/login-auth' component={LoginAuth}/>
              <Route exact path='/' component={Home}/>
            </Switch>
          </div>
        </Router>       
      </div>
    );
  }

 
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import ManagementMenu from './components/Management/ManagementMenu';
import ListMenu from './components/Management/ListMenu';
import CreateLists from './components/Management/CreateLists';
import ViewLists from './components/Management/ViewLists';
import EditList from './components/Management/EditLists';

class App extends React.Component {
 
  render(){
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path='/view-lists' component={ViewLists}/> 
              <Route path='/edit-list/:listId' component={EditList}/>
              <Route path='/create-lists' component={CreateLists}/>
              <Route path='/list-menu'component={ListMenu} />
              <Route path='/main-menu'component={ManagementMenu} />
              <Route path='/sign-up' component={SignUp}/>
              <Route path='/log-in' component={LogIn}/> 
              <Route exact path='/' component={Home}/>
            </Switch>
          </div>
        </Router>       
      </div>
    );
  }

 
}

export default App;

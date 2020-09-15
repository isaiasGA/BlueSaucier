import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home&Auth/Home';
import SignUp from './components/Home&Auth/SignUp';
import LogIn from './components/Home&Auth/LogIn';

import About from './components/Home&Auth/About';
import Contact from './components/Home&Auth/Contact';

import ManagementMenu from './components/MainMenu/ManagementMenu';
import ListMenu from './components/OrderingLists/ListMenu';

import CreateLists from './components/OrderingLists/CreateLists';
import ViewLists from './components/OrderingLists/ViewLists';
import EditList from './components/OrderingLists/EditLists';

import MenuPlanning from './components/MenuPlanning/MenuPlanning';
import CreateMenu from './components/MenuPlanning/CreateMenu';
import ViewMenu from './components/MenuPlanning/ViewMenu';
import EditMenu from './components/MenuPlanning/EditMenu';

import ManageProfile from './components/ManageProfile/ViewProfile';
import EditName from './components/ManageProfile/EditProfile';

class App extends React.Component {
 
  render(){
    return (
      <div className="App">
          <div>
            <Switch>
              <Route path='/edit-profile' component={EditName} />
              <Route path='/view-profile' component={ManageProfile} />

              <Route path='/edit-menu/:menuId' component={EditMenu}/>
              <Route path='/view-menu' component={ViewMenu} />
              <Route path='/create-menu' component={CreateMenu} />
              <Route path='/menu-planning' component={MenuPlanning} />

              <Route path='/view-lists' component={ViewLists}/> 
              <Route path='/edit-list/:listId' component={EditList}/>
              <Route path='/create-lists' component={CreateLists}/>
              <Route path='/list-menu'component={ListMenu} />

              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact} />

              <Route path='/main-menu'component={ManagementMenu} />
              <Route path='/sign-up' component={SignUp}/>
              <Route path='/log-in' component={LogIn}/> 
              <Route exact path='/' component={Home}/>
            </Switch>
          </div>
      </div>
    );
  }

 
}

export default App;

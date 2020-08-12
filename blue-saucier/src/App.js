import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import fire from './config/firebase';

import Home from './components/Home';
import SignUp from './components/SignUp';
import LoginAuth from './components/LoginAuth';
import LogIn from './components/LogIn';
import ManagementMenu from './components/Management/ManagementMenu';
import ListMenu from './components/Management/ListMenu';
import CreateLists from './components/Management/CreateLists';
import ViewLists from './components/Management/ViewandDeleteLists';
import EditList from './components/Management/EditLists';

class App extends React.Component {
  state = { 
    uid: '',
    editId: '',
    listData: []
  }

  componentDidMount() {
    this.getListData();
    this.getUserId();
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  getListData(){
      const dataBase = fire.firestore();
       this.unsubscribe = dataBase.collection('restaurantList').onSnapshot(snap => {
        const listData = [];
         snap.forEach(list => listData.push(({...list.data(), listId: list.id })))
         this.setState({listData: listData})
        })
  }

  getUserId() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
         this.setState({ uid: user.uid })
      } else {
        this.setState({ uid: null });
      }
    });
  }

 
  render(){
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path='/view-lists'> 
                <ViewLists uid={this.state.uid} listData={this.state.listData}/> 
              </Route> 
              <Route path='/edit-list/:listId' component={EditList}/>
              <Route path='/create-lists' component={CreateLists}/>
              <Route path='/list-menu'component={ListMenu} />
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

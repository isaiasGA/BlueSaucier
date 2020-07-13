import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom'

import Home from './components/Home';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Home />
            <SignUp />
          </Switch>
          <Footer />
        </div>
      </Router>  
    </div>
  );
}

export default App;

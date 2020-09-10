import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import Footer from './Footer';

function Home(){

  useEffect (() =>{
    window.scrollTo(0, 0)
  })

  const history = useHistory();

  const routeToSignUp = () => {
    history.push('/sign-up')
  }

  const routeToLogIn = () => {
    history.push('/log-in')
  }

    return(
      <>
       <div className='home'>
        <div className='homeContent'>
          <h1 className='homeTitle'>Blue Saucier</h1>
          <div className='homeBttnsContainer'>
            <button className='homeBttns' onClick={routeToSignUp}>Sign Up</button>
            <button className='homeBttns' onClick={routeToLogIn}>Log In</button>
          </div>
        </div>
      </div>
      <Footer  menuOne='Contact' menuTwo='About' linkOne='/contact' linkTwo='/about'/>
      </>
    )
  }

export default Home;
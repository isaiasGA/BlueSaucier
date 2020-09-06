import React from 'react';
import {Link} from 'react-router-dom';

import Footer from './Footer';

function Home(){
    return(
      <>
       <div className='home'>
        <div className='home-content'>
          <h1 className='home-title'>Blue Saucier</h1>
            <Link className=' massive ui button ui inverted button' to='/sign-up' style={{ marginRight: '23%'}}>Sign Up</Link>
            <Link className='massive ui button ui inverted button' to='/log-in'>Log In</Link>
        </div>
      </div>
      <Footer  menuOne='Contact' menuTwo='About' linkOne='/contact' linkTwo='/about'/>
      </>
    )
  }

export default Home;
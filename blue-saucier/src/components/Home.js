import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
      <div className='home'>
        <div className='home-content'>
          <h1 className='home-title' style={{ marginTop: ' 20%'}}>Blue Saucier</h1>
            <Link className=' massive ui button ui inverted button' to='/sign-up' style={{ marginRight: '23%'}}>Sign Up</Link>
            <Link className='massive ui button ui inverted button' to='/log-in'>Log In</Link>
        </div>
      </div>
    )
  }

export default Home;
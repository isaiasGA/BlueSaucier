import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
    <div>
      <div className='ui three item ui inverted segment ui large menu'>
          <Link to ='/' className='blue button item'>
            Home
          </Link>
          <Link to ='/about' className= 'button item'>
            About
          </Link>
          <Link to ='/contact' className='blue button item'>
            Contact
          </Link>
      </div>
    </div>
    )
};


export default Footer;
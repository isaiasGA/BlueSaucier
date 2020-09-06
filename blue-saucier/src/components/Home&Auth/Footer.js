import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {
  const {menuOne, menuTwo, linkOne, linkTwo} = props;
    return (
    <div className='footer'>
      <div className='ui two item ui inverted segment ui mini menu'>
          <Link to ={linkOne} className='blue button item'>
            {menuOne}
          </Link>
          <Link to = {linkTwo} className= 'button item'>
            {menuTwo}
          </Link>
      </div>
    </div>
    )
};


export default Footer;
import React from 'react';

import LogInForm from './AuthForms/LogInForm';
import Footer from './Footer'

class SignIn extends React.Component {

  render() {
    return(
      <>
        <LogInForm reDirect={() => this.props.history.push('/main-menu')}/>
        <Footer 
          menuOne= 'Home' 
          menuTwo='Contact' 
          linkOne='/' 
          linkTwo='/contact'
        />
      </>
    );
  }
}

export default SignIn;
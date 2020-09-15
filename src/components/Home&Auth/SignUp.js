import React  from 'react';

import SignupForm from './AuthForms/SignUpForm';
import Footer from './Footer';


class SignUp extends React.Component {

  render() {
    return(
      <>
        <SignupForm />
        <Footer 
          menuOne='Home' 
          menuTwo='Contact' 
          linkOne='/' 
          linkTwo='/contact'/> 
      </>  
    );
  }
}

export default SignUp;

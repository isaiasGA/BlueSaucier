import React from 'react';
import fire from '../config/firebase';

import Footer from './Footer'

class SignUp extends React.Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }

      handleSubmit = event => {
        
      }
    
        
    
   
  render() {
    return(
      <div>
       <form onSubmit={this.handleSubmit} className="signUp ui form">
         <h2 className='instructions'>Please provide the following information to create an account.</h2>
          <div className='field three wide field'>
            <label style={{color: 'white'}}>First Name</label>
            <input value={this.state.firstName} onChange={this.handleChanges} type='text' name='firstName' placeholder='First Name' autoComplete='off'/>
          </div>
          <div className='field three wide field'>
            <label style={{color: 'white'}}>Last Name</label>
            <input value={this.state.lastName} onChange={this.handleChanges} type='text' name='lastName' placeholder='Last Name' autoComplete='off'/>
          </div>
          <div className="field three wide field">
            <label style={{color: 'white'}}>E-mail</label>
            <input value={this.state.email} onChange={this.handleChanges} type="email" name='email' placeholder="Email" autoComplete='off'/>
          </div>
          <div className="field three wide field">
            <label style={{color: 'white'}}>Password</label>
            <input value={this.state.password} onChange={this.handleChanges} type="password" name='password' autoComplete='off'/>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
        <Footer/> 
      </div>  
    )
  }
}





export default SignUp;

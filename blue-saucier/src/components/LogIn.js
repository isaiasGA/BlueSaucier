import React from 'react';
import fire from '../config/firebase';

import Footer from './Footer'

class SignIn extends React.Component {
    state = {
      email: '',
      password: '',
    }

    handleSubmit = event => {
      event.preventDefault();
      fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
    }

  handleChanges= event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <div>
       <form onSubmit={this.handleSubmit} className="signIn ui form">
         <div className='signContent'>
          <h2 className='instructions'>Log In</h2>
          <div className="field three wide field">
            <label style={{color: 'white'}}>E-mail</label>
            <input value={this.state.email} onChange={this.handleChanges} type="email" name='email' placeholder="Email" autoComplete='off'/>
          </div>
          <div className="field three wide field">
            <label style={{color: 'white'}}>Password</label>
            <input value={this.state.password} onChange={this.handleChanges} type="password" name='password' autoComplete='off'/>
          </div>
          <button className="ui button" type="submit">Submit</button>
         </div>
        </form>
        <Footer />
      </div>  
    )
  }
}

export default SignIn;
import React from 'react';
import * as Firebase from 'firebase/app';


class LogInForm extends React.Component {
  state = {
    email: '',
    password: '',
    errorCode: '',
    display: 'none'
  }

  firebaseSignInUser = () => {
    Firebase
    .auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(this.props.reDirect)
    .catch(error => {
      console.log(error)
      if(error.code === 'auth/user-not-found'){
        this.setState( {errorCode: 'User not found' })  
        } else if (error.code === 'auth/wrong-password'){
          this.setState({ errorCode: 'Please verify your password' })
        } else if (error.code === 'auth/invalid-email'){
          this.setState({ errorCode: 'Please verify your email'})
        }
        this.setState({ display: ''})
      })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.firebaseSignInUser();
  }

  handleChanges= event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return(
      <div className='signIn'>
        <form onSubmit={this.handleSubmit} className=" loginForm ui form error">
          <div className='signContent'>
            <h3 className='instructions'>Log In</h3>
            <div className="ui error message" style={{width:'25%', display:`${this.state.display}`}}>
              <div className='header'>{this.state.errorCode }</div>
            </div>
            <div className="field four wide field">
              <label style={{color: 'white'}}>E-mail</label>
              <input 
                value={this.state.email} 
                onChange={this.handleChanges} 
                type="email" name='email' 
                placeholder="Email" 
                autoComplete='off'
                />
            </div>
            <div className="field four wide field">
              <label style={{color: 'white'}}>Password</label>
              <input 
                value={this.state.password} 
                onChange={this.handleChanges} 
                type="password" 
                name='password' 
                placeholder='Password'
                autoComplete='off'/>
            </div>
          <button className="ui button" type="submit" style={{marginLeft: '8%'}}>Submit</button>
        </div>
      </form>
    </div>  
    );
  }
}

export default LogInForm;
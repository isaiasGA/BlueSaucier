import React  from 'react';
import fire from '../../config/firebase';

import SuccessModal from './SuccessModal';
import Footer from './Footer';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',

  firstNameError: '',
  lastNameError: '',
  emailError: '',
  passwordError: '',
  errorCode: '',

  modalOpen: false
}

class SignUp extends React.Component {
    state = initialState;

    validate = () => {

     let firstNameError = '';
     let lastNameError = '';
     let emailError = '';
     let passwordError = ''

     if(!this.state.firstName){
       firstNameError = 'Please provide your first name'
     }

     if(!this.state.lastName){
      firstNameError = 'Please provide your last name'
    }

    if(!this.state.email){
      firstNameError = 'Please provide an email adress'
    }

    if(!this.state.password){
      firstNameError = 'Please provide a password'
    }
    

     if(firstNameError || lastNameError || emailError || passwordError){
       this.setState({ firstNameError, lastNameError, emailError, passwordError });
       return false;
     }

     return true;
    }

      handleSubmit = event => {
        event.preventDefault();

        const isValid = this.validate();
        if(isValid){
          fire
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .catch(error => {
            console.log('error',error);
            if(error.code === 'auth/email-already-in-use'){
              this.setState({ errorCode: error.message})
            }
          });

            return fire.auth().onAuthStateChanged(newUser => {
            console.log(newUser)

            newUser.updateProfile({
              displayName:`${this.state.firstName} ${this.state.lastName}`
            }).then(() => {
              this.setState(initialState)
              this.setState({modalOpen: true})
            })
          })
        }
      }
      
      handleChanges= event => {
        this.setState({[event.target.name]: event.target.value});
      }
    
   
  render() {
    return(
      <>
        <SuccessModal 
          key='modal1'
          modalOpen={this.state.modalOpen}
        />

       <form onSubmit={this.handleSubmit} className="signUp ui form error">
         <h2 className='instructions'>Please provide the following information to create an account.</h2>
         <div className='formContent'>

            <div className='ui error message' style={{width:'25%'}}>{this.state.firstNameError || this.state.errorCode}</div>
            <div className='field four wide field'>
              <label style={{color: 'white'}}>First Name</label>
              <input 
                value={this.state.firstName} 
                onChange={this.handleChanges} 
                type='text' 
                name='firstName' 
                placeholder='First Name' 
                autoComplete='off'
              />
              
            </div>

          <div className='field four wide field'>
            <label style={{color: 'white'}}>Last Name</label>
            <input 
              value={this.state.lastName} 
              onChange={this.handleChanges} 
              type='text' name='lastName' 
              placeholder='Last Name' 
              autoComplete='off'
            />
            <div className='ui error message'>{this.state.lastNameError}</div>
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
            <div className='ui error message'>{this.state.emailError}</div>
          </div>

          <div className="field four wide field">
            <label style={{color: 'white'}}>Password</label>
            <input 
              value={this.state.password} 
              onChange={this.handleChanges} 
              type="password" 
              name='password' 
              placeholder='Password' 
              autoComplete='off'
            />
            <div className='ui error message'>{this.state.passwordError}</div>
          </div>
          <button className="ui button" type="submit" style={{marginLeft: '8%'}}>Submit</button>
         </div>
        </form>
        <Footer/> 
      </>  
    )
  }
}






export default SignUp;

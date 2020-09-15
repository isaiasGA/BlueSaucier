import React from 'react';
import {Link} from 'react-router-dom';
import * as Firebase from 'firebase/app';

import ConfirmModal from './ConfirmModal';

const initialState = {

  newFirstName: '',
  newLastName: '',
  currentPassword:'',
  newPassword: '',
  newEmail: '',

  display: 'none',
  authError: '',
  passwordError: '',
  emailError: '',

  modalToggle: false

}

class EditProfile extends React.Component {
     state = initialState;

  handleChanges = (event) => {
    this.setState({[ event.target.name]: event.target.value })
  }
  changeUserInfo = (currentPassword) => {
    Firebase.auth().onAuthStateChanged(user => {
      const {newFirstName, newLastName, newPassword, newEmail, passwordError, authError, emailError} = this.state;


      if(newFirstName && newLastName ){
        user.updateProfile({
          displayName: `${newFirstName} ${newLastName}`
        })
      }

      const credentials = Firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);

      if(newPassword.length || newEmail.length ){
        if(!currentPassword){
          this.setState({authError: 'Please provide your current password', display:''})
        }
        user.reauthenticateWithCredential(credentials)
        .then(() => {

          if( newPassword.length >= 6 ){
            user.updatePassword(newPassword).catch(error => {
              if(error.code){
                this.setState({ passwordError: error.message,  display: ''})
                }
              })
            } else if(newPassword.length > 1 && newPassword.length < 6){
              this.setState({ passwordError: 'New password needs to be at least 6 characters long', display: ''
            })}
        
          if(newEmail.length > 5){
            user.updateEmail(newEmail)
            .then(success => {
            console.log(success)})
            .catch(error => {
              if(error.code){
                this.setState({emailError: error.message, display: ''})
                }
            })
          } else if (newEmail.length > 1 && newPassword.length < 5) {
            this.setState({emailError: 'New email must be at least 5 characters long', display: ''
            })}
          })
        .catch(error => {
          if(error.code){
            this.setState({authError: error.message})
              }
            })
        } 

       if((newFirstName && newLastName) || (!passwordError && !emailError && !authError)){
        this.setState({ modalToggle: true })
        }
      })
  }

  onSubmit = (event) => {
    event.preventDefault(); 
      this.changeUserInfo(this.state.currentPassword)
  }

  render(){
    return(
      <>
        <ConfirmModal
          key='modal1'
          modalToggle={this.state.modalToggle}
        />

        <div className='editProfile'>
          <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
              <Link to ='/main-menu' className='active item'>Main Menu</Link>
              <Link to ='/view-profile' className='item'>View Profile</Link>
            </div>

          <div className='editProfileContent'>
          <h2 className='editProfileInstructions'>Please fill out the fields that you wish to change. If no change is needed for a specific field, leave the field empty.</h2>
            <div className='editProfileErrorMessage'>
              <div className="ui error message editProfileErrorMessage" style={{width:'25%', marginLeft: '37%',display:`${this.state.display}`}}>
            </div>
              <div className='header'>{this.state.passwordError}</div>
                                <br></br>
              <div className='header'>{this.state.emailError}</div>
                                <br></br>
              <div className='header'>{this.state.authError}</div>
            </div>
            <form onSubmit={this.onSubmit} className='ui form ui container' style={{marginLeft: '42%', widht:'100%'}}>
              <div className='editProfileInput'>
                <label style={{color: 'white'}}>First Name:</label>
                <input value={this.state.newFirstName} onChange={this.handleChanges} type='text' name='newFirstName' placeholder='First Name' autoComplete='off'/>
              </div>
              <div className='editProfileInput'>
                <label style={{color: 'white'}}>Last Name:</label>
                <input value={this.state.newLastName} onChange={this.handleChanges} type='text' name='newLastName' placeholder='Last Name' autoComplete='off'/>
              </div>
              <div className='editProfileInput'>
                <h4>*Please provie your current password in order to change to a new password and/or a new email.</h4>
                <label style={{color: 'white'}}>Current Password:</label>
                <input value={this.state.currentPassword} onChange={this.handleChanges} type='password' name='currentPassword' placeholder='Current Password' autoComplete='off'/>
              </div>
              <div className='editProfileInput'>
                <label style={{color: 'white'}}>New Password</label>
                <input value={this.state.newPassword} onChange={this.handleChanges} type='password' name='newPassword' placeholder='New Password' autoComplete='off'/>
              </div>
              <div className='editProfileInput'>
                <label style={{color: 'white'}}>New Email:</label>
                <input value={this.state.newEmail} onChange={this.handleChanges} type='email' name='newEmail' placeholder='New Email' autoComplete='off'/>
              </div>
              <div className='bttnContainer'>
               <button className='ui black button' style={{marginRight: '16%'}}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }


}

export default EditProfile;
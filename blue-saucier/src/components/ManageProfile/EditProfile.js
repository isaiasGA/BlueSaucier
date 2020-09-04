import React from 'react';
import * as Firebase from 'firebase/app';

class EditName extends React.Component {
     state = {
      firstName: '',
      lastName: '',

      newFirstName: '',
      newLastName: '',
      currentPassword:'',
      newPassword: '',
      newEmail: '',

      display: 'none',
      passwordError: '',
      emailError: ''

  }

  handleChanges = (event) => {
    this.setState({[ event.target.name]: event.target.value })
}


changeUserInfo = (currentPassword) => {
   Firebase.auth().onAuthStateChanged(user => {
    const {newFirstName, newLastName, newPassword, newEmail} = this.state;

    if(newFirstName.length && newLastName.length > 3 ){
      user.updateProfile({
        displayName: `${newFirstName} ${newLastName}`
      })
    } 

    const credentials = Firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);

    if(newPassword.length || newEmail.length ){
      user.reauthenticateWithCredential(credentials)
      .then(() => {

        if(newPassword.length >= 6){
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
    }
   
     })
}

  onSubmit = (event) => {
    event.preventDefault(); 
      this.changeUserInfo(this.state.currentPassword)
      // this.props.history.push('/view-profile')
  }

render(){

  return(
    <div className='editProfile'>
      <div className='editProfileContent'>
      <h2 className='editProfileInstructions'>Please fill out the fields that you wish to change. If no change is needed for a specific field, leave the field empty.</h2>
        <div className="ui error message" style={{width:'25%', display:`${this.state.display}`}}>
          <div className='header'>{this.state.passwordError}</div>
                            <br></br>
          <div className='header'>{this.state.emailError}</div>
        </div>
        <form onSubmit={this.onSubmit} className='ui form' style={{marginLeft: '42%', widht:'100%'}}>
          <div className='four wide field'>
            <label style={{color: 'white'}}>First Name:</label>
            <input value={this.state.firstName} onChange={this.handleChanges} type='text' name='firstName' placeholder='First Name' autoComplete='off'/>
          </div>
          <div className='four wide field'>
            <label style={{color: 'white'}}>Last Name:</label>
            <input value={this.state.lastName} onChange={this.handleChanges} type='text' name='lastName' placeholder='Last Name' autoComplete='off'/>
          </div>
          <div className='four wide field'>
            <h4>*Please provie your current password in order to change to a new password and/or a new email.</h4>
            <label style={{color: 'white'}}>Current Password:</label>
            <input value={this.state.currentPassword} onChange={this.handleChanges} type='password' name='currentPassword' placeholder='Current Password' autoComplete='off'/>
          </div>
          <div className='four wide field'>
            <label style={{color: 'white'}}>New Password</label>
            <input value={this.state.newPassword} onChange={this.handleChanges} type='password' name='newPassword' placeholder='New Password' autoComplete='off'/>
          </div>
          <div className='four wide field'>
            <label style={{color: 'white'}}>New Email:</label>
            <input value={this.state.newEmail} onChange={this.handleChanges} type='email' name='newEmail' placeholder='New Email' autoComplete='off'/>
          </div>
          <button className='ui black button' style={{marginRight: '76%'}}>Submit</button>
        </form>
      </div>
    </div>
  )
}


}

export default EditName;
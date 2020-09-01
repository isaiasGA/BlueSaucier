import React, { useReducer } from 'react';
import fire from '../../config/firebase';

class EditProfile extends React.Component {
  state = {
    email: '',
    displayName: '',
    password: ''
  }

  componentDidMount(){
    this.getUser();
  }

  getUser = () => {
    fire.auth().onAuthStateChanged(user => {
     this.setState({email: user.email, displayName: user.displayName })
    })
    
  }

  render(){
    return(
      <div>
        <form>
          <label>Email</label>
          <input></input>
          <label>FirstName</label>
          <input></input>
          <label></label>
          <input></input>
        </form>
      </div>
    )
  }
}

export default EditProfile;
import React  from 'react';
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
      <div className='ui container'>
        <div className='manageProfileContent'>
          <div className='ui card' style={{marginLeft:'24%', width:'56%', height:'auto'}}>
            <p className='editPara' style={{marginTop:'14%'}}><strong>Email:</strong>  &nbsp; {this.state.email}</p>
            <p className='editPara'><strong>FirstName:</strong> &nbsp; {this.state.displayName}</p>
            <p className='editPara' style={{marginBottom:'16%'}}><strong>Password:</strong> *********</p>
            <div className='manageButtons'>
              <button className='ui blue button'>Edit Profile</button>
              <button className='ui red button'>Delete Profile</button>
           </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditProfile;
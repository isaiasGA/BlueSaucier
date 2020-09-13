import React  from 'react';
import { Link} from 'react-router-dom';
import fire from '../../config/firebase';

class ManageProfile extends React.Component {
  state = {
    email: '',
    displayName: '',
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
      <div className='viewProfile'>
        <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
          <Link to ='/main-menu' className='active item'>Main Menu</Link>
        </div>

        <div className='viewProfileContent'>
          <div className='ui card ui container profileContainer' style={{marginLeft:'34%', width:'35%', height:'auto'}}>
            <div className='viewProfileImg'>
              <p className='viewProfileInfo' style={{marginTop:'14%'}}><strong>Name:</strong> &nbsp; {this.state.displayName}</p>
              <p className='viewProfileInfo'><strong>Email:</strong>  &nbsp; {this.state.email}</p>
              <p className='viewProfileInfo'><strong>Password:</strong> &nbsp; *********</p>
              <div className='viewProfileBttn'>
                <Link to='/edit-profile' className='ui blue button'>Edit Profile</Link>
              </div>
            </div>           
          </div>
        </div>
      </div>
    );
  }
}

export default ManageProfile;
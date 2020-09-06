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
      <div className='manageProfile'>
        <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
          <Link to ='/main-menu' className='active item'>Main Menu</Link>
        </div>

        <div className='manageProfileContent'>
          <div className='ui card' style={{marginLeft:'34%', width:'35%', height:'auto'}}>
            <div className='manageProfileImg'>
              <p className='editPara' style={{marginTop:'14%'}}><strong>Name:</strong> &nbsp; {this.state.displayName}</p>
              <p className='editPara'><strong>Email:</strong>  &nbsp; {this.state.email}</p>
              <p className='editPara'><strong>Password:</strong> &nbsp; *********</p>
              <div className='manageButtons'>
                <Link to='/edit-profile' className='ui blue button'>Edit Profile</Link>
              </div>
            </div>           
          </div>
        </div>
      </div>
    )
  }
}

export default ManageProfile;
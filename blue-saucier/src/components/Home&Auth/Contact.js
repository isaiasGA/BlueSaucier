import React from 'react';
import {Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Contact extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return(
      <div className='contact'>
        <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
          <Link to ='/' className='active item contactLink'>Home</Link>
        </div>
        <div className='ui container'>
          <div className='contactCards'>
            <div className='ui card' style={{ marginTop: '1%'}}>
              <div className='contactContent'>
                <h3 className='contactHeader'>E-mail</h3>
                <Icon name='envelope outline' style={{width: '84%', height: '65px', fontSize: '1.4rem'}}> &nbsp; <p>isaiasgarciaariza@gmail.com</p></Icon>            
              </div>
            </div>
            <div className='ui card'>
              <div className='contactContent'>
                <h3 className='contactHeader'>Twitter</h3>
                <Icon name='twitter' style={{width: '57%', height: '62px', fontSize: '1.4rem'}}> &nbsp; <a href='https://twitter.com/IsaiasGar_Ar ' target='_blank' rel="noopener noreferrer">twitter.com/IsaiasGar_Ar</a></Icon>            
              </div>
            </div>
            <div className='ui card' style={{height: '100px'}}>
              <div className='contactContent'>
                <h3 className='contactHeader'>GitHub</h3>
                <Icon name='github' style={{width: '56%', height: '64px', fontSize: '1.4rem'}}> &nbsp; <a href='https://github.com/isaiasGA' target='_blank' rel="noopener noreferrer">github.com/isaiasGA</a></Icon>            
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

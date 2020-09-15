import React from 'react';
import {Header, Icon, Modal } from 'semantic-ui-react';
import {Link}  from 'react-router-dom';



class ConfirmModal extends React.Component {
  render(){
    return(
      <Modal
        style={{background: 'rgba(0,0,0,.95', textAlign: 'center', fontSize: '2rem'}}
        basic
        open={this.props.modalToggle}
        size='small'
      >
        <Header>
          <Icon name='thumbs up outline' />
          Success!
        </Header>
        <Modal.Content>
          <p>Your profile information has been updated. You will now be logged</p>
        </Modal.Content>
        <Modal.Actions style={{textAlign: 'center'}}>
          <Link to='/log-in' className='ui button'>Continue</Link>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ConfirmModal;
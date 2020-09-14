import React from 'react';
import { Header, Icon, Modal} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SuccessModal extends React.Component {
  render() {
    return (
      <Modal
        style={{backgroundColor: 'rgba(0,0,0,.95', textAlign: 'center', fontSize: '2rem'}}
        basic
        open={this.props.modalOpen}
        size='small'
      >
        <Header>
          <Icon name='thumbs up outline' />
          Success!
        </Header>
        <Modal.Content>
          <p>Your new account has been successfully created!</p>
        </Modal.Content>
        <Modal.Actions style={{textAlign: 'center'}}>
          <Link to ='/' className='ui button'>Continue</Link>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default SuccessModal;
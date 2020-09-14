import React from 'react';
import fire from '../../config/firebase';
import {Link} from 'react-router-dom';

class ViewLists extends React.Component {
  state = { 
    uid: '',
    listData: []
  }

  componentDidMount() {
    this.getListData();
    this.getUserId();
    } 

  componentWillUnmount(){
    this.unsubscribe()
    }

  getListData(){
    const dataBase = fire.firestore();
    
     this.unsubscribe = dataBase.collection('restaurantList').onSnapshot(snap => {
      const listData = [];
       snap.forEach(list => listData.push(({...list.data(), listId: list.id })))
       this.setState({listData: listData})
      })
    }

  getUserId() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ uid: user.uid })
      } else {
        this.setState({ uid: null });
      }
    });
   }

  render() {

    const item = this.state.listData.map(listObject => {
        if(listObject.uid === this.state.uid){
         return (
          <div className='ui centered blue card' key={listObject.listId}>
            <div className='content'>
              <p><strong>Item:</strong> &nbsp; {listObject.item}</p>
              <p><strong>Category:</strong> &nbsp; {listObject.category}</p>
              <p><strong>Quantity needed:</strong> &nbsp; {listObject.quantity}</p>
              <p><strong>Unit price:</strong> &nbsp; ${listObject.unitPrice}</p>
              <p><strong>Total:</strong> &nbsp; ${listObject.total}</p>
              <Link to={`edit-list/${listObject.listId}`}className='ui blue button'>Edit</Link>
              <button className='ui inverted red button' onClick={() => fire.firestore().collection('restaurantList').doc(listObject.listId).delete()}>Delete</button>
            </div>
          </div>
          )
        }
        else {return null}
    })
    
    return (
     <div className='view-list'>
        <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
          <Link to ='/main-menu' className='active item'>Main Menu</Link>
          <Link to ='/create-lists' className='item'>Create List</Link>
        </div>
        <h2 className='viewListTitle'>My Ordering Lists</h2>
          {item}
     </div>
     
    );
  }
 
}

export default ViewLists;
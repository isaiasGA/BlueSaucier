import React from 'react';
import fire from '../../config/firebase';
import {Link} from 'react-router-dom';


class ViewMenu extends React.Component {
  state = { 
    uid: '',
    menuData: [], 
  }

  componentDidMount() {
    this.getMenuData();
    this.getUserId();
    } 
  componentWillUnmount(){
    this.unsubscribe()
    }
  getMenuData(){
    const dataBase = fire.firestore();
    
     this.unsubscribe = dataBase.collection('restaurantMenu').onSnapshot(snap => {
        //Ading data to an array and then using setState to asign that array to our state, will allow us to display each of the fetched menus individually
       const menuData = []
       snap.forEach(menu => menuData.push(({ ...menu.data(), menuId: menu.id })))
       this.setState({ menuData })
      });
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
    const menuDataOne = () => this.state.menuData.map(menuObject => {

    if(menuObject.uid === this.state.uid){
         return (
          <div className='ui centered blue card ui container' key={menuObject.menuId} style={{width:'522px', marginBottom: '2%'}}>
            <div className='menuBackground2'>
              <h3 className='viewMenuTitle'>Menu</h3>
              <h3 className='viewMenuCategory'> {menuObject.category} </h3>
              <h4 className='viewMenuDish'> {menuObject.dish}................................{menuObject.price} </h4>
              <p className='viewMenuDescription'> {menuObject.description} </p>

                {menuObject.dishValues.map((dish, i) => {
                return <div className='viewMenuSectionTwo' key={i}>
                          <h3 className='viewMenuSecTwoCat'>{dish.category}</h3>
                          <h4 className='viewMenuSecTwoDish'>{dish.dish}................................{dish.price}</h4>
                          <p className='viewMenuCatTwoDesc'>{dish.description}</p>
                       </div>
                    })}
                <div className='viewMenuBttns'> 
                <Link to={`edit-menu/${menuObject.menuId}`}className='ui blue button' style ={{marginLeft:'27%'}}>Edit</Link>
                <button className='ui red button' onClick={() => fire.firestore().collection('restaurantMenu').doc(menuObject.menuId).delete()}>Delete</button>     
              </div>
            </div>
          </div>
          );
        }
        else {return null}
    })
    
      return (
        <div className='viewMenu'>
          <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
            <Link to ='/main-menu' className='active item'>Main Menu</Link>
            <Link to ='/create-menu' className='item'>Create Menu</Link>
          </div>
         {menuDataOne()}
        </div> 
    );
  }
 
}

export default ViewMenu;
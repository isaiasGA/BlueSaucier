import React from 'react';
import fire from '../../config/firebase';
import { Link } from 'react-router-dom';

class CreateMenu extends React.Component {
  state = {
    category: '',
    dish:'',
    description: '',
    price:'',
    user: '',
    uid: ''
  }

  componentDidMount() {
    this.getUserId();
  }

  componentWillUnmount(){
    this.userId();
  }

  getUserId() {
    this.userId = fire.auth().onAuthStateChanged(user => {
      if (user) {
         this.setState({ uid: user.uid, user: user.displayName})
      } else {
        this.setState({ uid: null });
      }
    });
  }

  handleChanges = event => {
    this.setState({[event.target.name]: event.target.value});
  }


  handleSubmit = event =>{
    event.preventDefault();

    fire.firestore().collection('restaurantMenu').add({
      category: this.state.category,
      dish: this.state.dish,
      description: this.state.description,
      price: this.state.price,
      user: this.state.user,
      uid: this.state.uid
    }) 
    this.props.history.push('/view-menu')
  }

  render() {
    return(  
      <div className='createMenut'>
        <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
          <Link to ='/main-menu' className='ui button active item'>Main Menu</Link>
          <Link to ='/view-menu' className='item'>My Menu</Link>
         </div>

         <div className='ui container' style={{paddingTop:'11%'}}>
         <h1 style={{color: 'white', textAlign: 'center'}}>Fill out the following form to create a Menu</h1>
        <form onSubmit={this.handleSubmit} className="ui form" style={{marginLeft: '35%', width: '100%'}}>
          <div className='menuBackground' style={{background: 'blue'}}>
            <div className="three wide field">
              <label style={{color: 'white'}}>Category</label>
              <select onChange={this.handleChanges} className='ui fluid dropdown' name='category'>
                <option value=''>Cat</option>
                <option value='appetizers'>Appetizers</option>
                <option value='breakfast'>Breakfast</option>
                <option value='lunch'>Lunch</option>
                <option value='mains'>Mains</option>
                <option value='drinks'>Drinks</option>
                <option value='desserts'>Desserts</option>
              </select>
            </div>  
            <div className='two wide fields'>
              <div className='four wide field'>
                <label style={{color: 'white'}}>Dish</label>
                <input value={this.state.dish} onChange={this.handleChanges} type="text" name='dish' placeholder="Dish" autoComplete='off'/>
              </div>
            <div className='two wide field'>
              <label style={{color: 'white'}}>Price</label>
              <input value={this.state.price} onChange={this.handleChanges} type="text" name='price' placeholder="$" autoComplete='off'/>
            </div>
          </div>  
            <div className='four wide field'>
              <label style={{color: 'white'}}>Description</label>
              <textarea rows='2' value={this.state.description} onChange={this.handleChanges} type="text" name='description' placeholder="Description" autoComplete='off'/>
            </div>
          </div>
          <button className="ui button" type="submit" style={{marginLeft:'6%'}}>Create</button>
        </form>
       </div>
      </div>
    )
  };
}

export default CreateMenu;
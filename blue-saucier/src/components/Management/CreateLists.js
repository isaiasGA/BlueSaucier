import React from 'react';
import fire from '../../config/firebase';
import { Link } from 'react-router-dom';

class CreateLists extends React.Component {
  state = {
    item:'',
    quantity: '',
    unitPrice:'',
    total: '',
    category: '',
    user: '',
    uid: ''
  }

  componentDidMount() {
    this.getUserId();
  }

  getUserId() {
    fire.auth().onAuthStateChanged(user => {
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
    fire.firestore().collection('restaurantList').add({
      item: this.state.item,
      quantity: this.state.quantity,
      unitPrice: this.state.unitPrice,
      total: this.state.total,
      category: this.state.category,
      user: this.state.user,
      uid: this.state.uid
    }) 
    this.props.history.push('/view-lists')
  }

  render() {
    return(  
      <div className='createList'>
        <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
          <Link to ='/main-menu' className='ui button active item'>Main Menu</Link>
          <Link to ='/view-lists' className='item'>My Lists</Link>
         </div>

         <div className='ui container' style={{paddingTop:'11%'}}>
         <h1 style={{color: 'white', textAlign: 'center'}}>Fill out the following form to create a list of items</h1>
        <form onSubmit={this.handleSubmit} className="ui form" style={{marginLeft: '35%', width: '100%'}}>
          <div className="two fields">
            <div className='three wide field'>
              <label style={{color: 'white'}}>Item</label>
              <input value={this.state.item} onChange={this.handleChanges} type="text" name='item' placeholder="Item" autoComplete='off'/>
            </div>
            <div className=" one wide field">
              <label style={{color: 'white'}}>Quantity</label>
              <select onChange={this.handleChanges} className='ui fluid dropdown' name='quantity'>
                <option value=''>Qty</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>
            </div>
          </div>

          <div className="two fields">
            <div className='two wide field'>
              <label style={{color: 'white'}}>Unit Price</label>
              <td></td>
              <input value={this.state.unitPrice} onChange={this.handleChanges} type="text" name='unitPrice' placeholder="$" autoComplete='off' data-type='currency'/>
            </div>
            <div className='two wide field'>
              <label style={{color: 'white'}}>Total</label>
              <input value={this.state.total} onChange={this.handleChanges} type="number" name='total' placeholder="$" autoComplete='off'/>
            </div>
          </div>

          <div className="three wide field">
            <label style={{color: 'white'}}>Category</label>
            <select onChange={this.handleChanges} className='ui fluid dropdown' name='category'>
                  <option value=''>Cat</option>
                <option value='produce'>Produce</option>
                <option value='herbs'>Herbs</option>
                <option value='eggs'>Eggs</option>
                <option value='dairy'>Dairy</option>
                <option value='meat'>Meat</option>
                <option value='fish'>Fish</option>
                <option value='condiments'>Condiments</option>
                <option value='grains'>Grains</option>
                <option value='spices'>Spices</option>
                <option value='alcohol'>Alcohol</option>
                <option value='other'>Other</option>
              </select>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
      </div>
    )
  };
}

export default CreateLists;
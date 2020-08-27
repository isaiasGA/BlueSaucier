import React from 'react';
import fire from '../../config/firebase';

class EditLists extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: '',
      category: '',
      quantity: '',
      unitPrice: '',
      total: '',
      docId: '',
      uid: ''
    }
  }

  componentDidMount(){
    const getLists = fire.firestore().collection('restaurantList').doc(this.props.match.params.listId);
    
    getLists.get().then((doc) => {
      const list = doc.data();
      this.setState({
        item: list.item,
        category: list.category,
        quantity: list.quantity,
        unitPrice: list.unitPrice,
        total: list.total,
        uid: list.uid,
        docId: doc.id
       })
     });
    }

  onChange = (event) => {
   this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { item, category,quantity, unitPrice, total, uid } = this.state;

    const updateList = fire.firestore().collection('restaurantList').doc(this.state.docId);
    updateList.set({
      item,
      category,
      quantity, 
      unitPrice, 
      total,
      uid
    }).then(() => {
      this.setState({
        item: '',
        category: '',
        quantity: '', 
        unitPrice: '', 
        total: ''
      });
      this.props.history.push("/view-lists")
    })
    .catch(error => {
      console.log('error', error)
    });

  }

  render(){
    return(
      <div className='editList'>
        <div className='ui container' style={{paddingTop:'11%'}}>
        <h2 style={{color: 'white', textAlign: 'center'}}>Edit your list</h2>
        <form className='ui form' onSubmit={this.onSubmit}  style={{marginLeft: '35%', width: '100%'}}>
          <div className='two fields'>
            <div className='three wide field'>
              <label style={{color: 'white'}}>Item</label>
              <input type='text' name='item' value={this.state.item} onChange={this.onChange} placeholder='item' autoComplete='off'/>
            </div>
            <div className='two wide field'>
            <label style={{color: 'white'}}>Quantity</label>
              <select onChange={this.onChange} className='ui fluid dropdown' name='quantity'>
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
          <div className='two fields'>
            <div className='two wide field'>
              <label style={{color: 'white'}}>Unit Price</label>
               <td></td>
              <input value={this.state.unitPrice} onChange={this.onChange} type="text" name='unitPrice' placeholder="$" autoComplete='off' data-type='currency'/>
            </div>
            <div className='two wide field'>
              <label style={{color: 'white'}}>Total</label>
              <input value={this.state.total} onChange={this.onChange} type="text" name='total' placeholder="$" autoComplete='off'/>
            </div>
          </div>
          <div className="three wide field">
            <label style={{color: 'white'}}>Category</label>
            <select onChange={this.onChange} className='ui fluid dropdown' name='category'>
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
          <button type='submit' className='ui button blue'>Submit Changes</button>
        </form>
      </div>
      </div>  
    )
   
  }

}



export default EditLists;
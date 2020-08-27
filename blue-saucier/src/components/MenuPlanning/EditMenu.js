import React from 'react';
import fire from '../../config/firebase';
import { Link } from 'react-router-dom';

class EditMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: '',
      dish:'',
      description: '',
      price:'',
      menuId: '',
      uid: '',
  
      dishValues: [{
       category: '',
       dish: '',
       description: '',
       price: '', 
      }]
    }
  }

  componentDidMount(){
    const getMenu = fire.firestore().collection('restaurantMenu').doc(this.props.match.params.menuId);
    
    getMenu.get().then((doc) => {
      const menu = doc.data();
      this.setState({
        category: menu.category,
        dish: menu.dish,
        description: menu.description,
        price: menu.price,
        menuId: menu.menuId,
        uid: menu.uid,
        menuId: doc.id,
        dishValues: menu.dishValues
       })
     });
    }

  getDishInputs(){
      return this.state.dishValues.map((elem, i) => (
        <div key={i}>
          <div className="five wide field" style={{paddingTop: '3%', marginLeft: '21%'}}>
            <label>Category</label>
            <select onChange={this.onChangeNewDish.bind(this, i)} className='ui fluid dropdown' name='category'>
              <option value= {elem.category}>Cat</option>
              <option value={'Apetizer'}>Appetizers</option>
              <option value={'Breakfast'}>Breakfast</option>
              <option value={'Lunch'}>Lunch</option>
              <option value={'Main'}>Main</option>
              <option value={'Drinks'}>Drinks</option>
              <option value={'Desserts'}>Desserts</option>
            </select>
          </div>  
          <div className='two wide fields'>
            <div  className='seven wide field'>
              <label>Dish</label>
              <input value={elem.dish || ""} onChange={this.onChangeNewDish.bind(this, i)} type="text" name='dish' placeholder="Dish" autoComplete='off'/>
            </div>
            <div className='four wide field'>
              <label>Price</label>
              <input value={elem.price || ""} onChange={this.onChangeNewDish.bind(this, i)} type="text" name='price' placeholder="$" autoComplete='off'/>
            </div>
          </div>  
          <div  className='twelve wide field'>
            <label>Description</label>
            <textarea rows='2' value={elem.description || ""} onChange={this.onChangeNewDish.bind(this, i)} type="text" name='description' placeholder="Description" autoComplete='off'/>
          </div>
        </div>
      ))
    }  

  onChange = (event) => {
   this.setState({[event.target.name]: event.target.value})
  }

  onChangeNewDish = (i, event) => {
    const {name, value} = event.target;
    let dishValues = [...this.state.dishValues];
    dishValues[i] = {...dishValues[i], [name]: value};
    this.setState({dishValues});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { category, dish, description, price,  dishValues, uid } = this.state;

    const updateMenu = fire.firestore().collection('restaurantMenu').doc(this.state.menuId);
    updateMenu.set({
      category,
      dish,
      description, 
      price, 
      dishValues,
      uid
    }).then(() => {
      this.setState({
        category: '',
        dish: '',
        description: '', 
        price: '', 
        dishValues: [{
          category: '',
          dish: '', 
          description: '', 
          price: ''
        }]
      });
      this.props.history.push("/view-menu")
    })
    .catch(error => {
      console.log('error', error)
    });

  }

  render(){
    console.log(this.state.menuId)
    return(
      <div className='editMenu'>
         <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
          <Link to ='/main-menu' className='active item'>Main Menu</Link>
          <Link to ='/view-menu' className='item'>View Menu</Link>
        </div>

        <div className='ui container' style={{paddingTop:'2%', width: '637px'}}>
         <h1 style={{color: 'white', textAlign: 'center'}}>Fill out the following form to create a Menu</h1>
        <form onSubmit={this.onSubmit} className="ui form" style={{textAlign: 'center', width: '100%'}}>
          <div className='menuBackground'>
            <h3 className='createMenuTitle'>Menu</h3>
            <div className="five wide field" style={{paddingTop: '3%', marginLeft: '21%'}}>
              <label>Category</label>
              <select onChange={this.onChange} className='ui fluid dropdown' name='category'>
                <option value=''>Cat</option>
                <option value='Appetizers'>Appetizers</option>
                <option value='Breakfast'>Breakfast</option>
                <option value='Lunch'>Lunch</option>
                <option value='Main'>Main</option>
                <option value='Drinks'>Drinks</option>
                <option value='Desserts'>Desserts</option>
              </select>
            </div>  
            <div className='two wide fields'>
              <div className='seven wide field'>
                <label>Dish</label>
                <input value={this.state.dish} onChange={this.onChange} type="text" name='dish' placeholder="Dish" autoComplete='off'/>
              </div>
            <div className='four wide field'>
              <label>Price</label>
              <input value={this.state.price} onChange={this.onChange} type="text" name='price' placeholder="$" autoComplete='off'/>
            </div>
          </div>  
            <div className='twelve wide field'>
              <label>Description</label>
              <textarea rows='1' value={this.state.description} onChange={this.onChange} type="text" name='description' placeholder="Description" autoComplete='off'/>
            </div>
            {this.getDishInputs()}
          </div>
          <button className="big ui black button" type="submit" style={{margin:'6%'}}>Submit Changes</button>
        </form>
       </div>
      </div>  
    )
   
  }

}



export default EditMenu;
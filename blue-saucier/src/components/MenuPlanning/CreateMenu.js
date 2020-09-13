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
      uid: '',
  
      dishValues: [{
        category: '',
        dish: '', 
        description: '', 
        price: ''
      }]
    }
 

  componentDidMount() {
    this.getUserId();
  }

  componentWillUnmount(){
    this.userId();
  }

  getUserId() {
    return this.userId = fire.auth().onAuthStateChanged(user => {
      if (user) {
         this.setState({ uid: user.uid, user: user.displayName})
      } else {
        this.setState({ uid: null });
       }
    });
  }

  createInputs(){
    return this.state.dishValues.map((elem, i) => (
      <div key={i}>
        <div className="five wide field" style={{paddingTop: '3%', marginLeft: '21%'}}>
          <label>Category</label>
          <select onChange={this.handleChangesNewDish.bind(this, i)} className='ui fluid dropdown' name='category'>
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
          <div  className='createMenuDish'>
            <label>Dish</label>
            <input value={elem.dish || ""} onChange={this.handleChangesNewDish.bind(this, i)} type="text" name='dish' placeholder="Dish" autoComplete='off'/>
          </div>
          <div className='createMenuPrice'>
            <label>Price</label>
            <input value={elem.price || ""} onChange={this.handleChangesNewDish.bind(this, i)} type="text" name='price' placeholder="$" autoComplete='off'/>
          </div>
        </div>  
        <div  className='twelve wide field'>
          <label>Description</label>
          <textarea rows='2' value={elem.description || ""} onChange={this.handleChangesNewDish.bind(this, i)} type="text" name='description' placeholder="Description" autoComplete='off'/>
        </div>
        <input
        style={{margin: '2% 23% 6% 0%'}}
          className='ui red button'
          type="button"
          value="Remove"
          onClick={this.removeDish.bind(this, i)}
        />
      </div>
    ));
  }

  handleChangesNewDish = (i, event) => {
    const {name, value} = event.target;
    let dishValues = [...this.state.dishValues];
    dishValues[i] = {...dishValues[i], [name]: value};
    this.setState({dishValues});
    }

  handleChanges = event => {
    this.setState({[event.target.name]: event.target.value});
    }

  addNewDish(){
    this.setState(prevState => ({ dishValues: [...prevState.dishValues, {category: '', dish: '', description: '', price: ''}]
      }))
    }

  removeDish = (i) => {
    let dishValues = [...this.state.dishValues];
    dishValues.splice(i, 1);
    this.setState({ dishValues })
    }

  handleSubmit = event =>{
    event.preventDefault();

    fire.firestore().collection('restaurantMenu').add({
      category: this.state.category,
      dish: this.state.dish,
      description: this.state.description,
      price: this.state.price,
      user: this.state.user,
      uid: this.state.uid,
      dishValues: this.state.dishValues
    }); 
    this.props.history.push('/view-menu')
   }

  render() {
    return(  
      <div className='createMenu'>
        <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
          <Link to ='/main-menu' className='ui button active item'>Main Menu</Link>
          <Link to ='/view-menu' className='item'>View Menu</Link>
         </div>

         <div className='ui container createMenuContainer' style={{width: '637px'}}>
         <h1 className='createMenuInstructions'>Fill out the following form to create a Menu</h1>
        <form onSubmit={this.handleSubmit} className="ui form createMenuForm">
          <div className='menuBackground'>
            <h3 className='createMenuTitle'>Menu</h3>
            <div className="five wide field createMenuCategory" style={{marginLeft: '21%'}}>
              <label>Category</label>
              <select onChange={this.handleChanges} className='ui fluid dropdown' name='category'>
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
              <div className='createMenuDish'>
                <label>Dish</label>
                <input value={this.state.dish} onChange={this.handleChanges} type="text" name='dish' placeholder="Dish" autoComplete='off'/>
              </div>
              <div className='createMenuPrice'>
                <label>Price</label>
                <input value={this.state.price} onChange={this.handleChanges} type="text" name='price' placeholder="$" autoComplete='off'/>
              </div>
            </div>  
            <div className='twelve wide field'>
              <label>Description</label>
              <textarea rows='1' value={this.state.description} onChange={this.handleChanges} type="text" name='description' placeholder="Description" autoComplete='off'/>
            </div>
            {this.createInputs()}
            <input
            style={{margin: '3% 24% 5% 0'}}
              className='ui blue button'
              type="button"
              value="Add New Dish"
              onClick={this.addNewDish.bind(this)}
            />
          </div>
          <button className="big ui white button" type="submit" style={{margin:'6%'}}>Create</button>
        </form>
       </div>
      </div>
    );
  }
}

export default CreateMenu;
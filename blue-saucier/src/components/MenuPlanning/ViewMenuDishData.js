import React from 'react';

class ViewMenuDishData extends React.Component {
  render(){
    console.log(console.log(this.props))
    const  {category, dish, price, description} = this.props.dishData;
          return(
            <>
              <p className='category'> {category} </p>
              <div className='dish-and-price'>
                <p className='dish'> {dish} </p>
                <p className='price'> {price} </p>
              </div>
             <p className='description'> {description} </p> 
            </>
    )
  }
}

export default ViewMenuDishData;
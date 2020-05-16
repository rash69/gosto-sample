import React, { useState, useContext, useEffect } from 'react';
import './ItemDetails.css';
import { useParams, Link } from 'react-router-dom';
import data from '../Data/Data';
import { UserContext } from '../Auth';

const ItemDetails = (props) => {  
  const {addToCart } = useContext(UserContext)
  const [product, setProduct]= useState(null);
  const [quantity, setQuantity] = useState(1);
  const {key} = useParams();
  
  // const item = data.find(item => item.key === key);

  useEffect(()=>{
      const food = data.filter(item => item.key === key)
    setProduct(food[0])
    
  },[key])

  // onchange handler
  const onchangeHandler = e => {
    if(!isNaN(e.target.value)) {
      setQuantity(e.target.value)
    }
  }
  
  const cartHandler = item => {
    addToCart({...item, quantity})
    props.history.push('/cart')
  }

  const quantityHandler = quan => {
    if(quantity < 0 || quantity === 0) {
      setQuantity(0)
    } else {
      setQuantity(quantity-quan)
    }
  } 

  return (
    <>
    {product ? (
    <section className="food-details pt-1">
      <div className="containers">
        <div className="row">
          <div className="col-md-6 m-auto d-block">
          <img src={product && product.img} className="food-img  d-block" alt=""/>
          </div>
          <div className="col-md-6 py-5">
            <div className="food-details-content">
              <h3>{product && product.recipe_name}</h3>
              <p className="subtitle text-muted pt-3">{product && product.description}</p>
            <div className="cart-item d-flex align-items-center ">
              <h3>${product && product.price}</h3>
              <div className="input-group input-cart-item ml-4">
                <button 
                  className="btn btn-default" 
                  onClick={()=>quantityHandler(1)}
                  id="remove-product"><i className="fas fa-minus"></i></button>
                <input type="text" 
                  id="food-quantity" 
                  onChange={onchangeHandler} 
                  className="form-control text-center" 
                  value={quantity} />
                <button 
                  onClick={()=>setQuantity(quantity*1 +1)}
                  className="btn btn-default" 
                  id="add-product"><i className="fas fa-plus"></i></button>
              </div>
            </div>
            <button className="btn btn-success btn-cart" onClick={()=>cartHandler(product)}>
              <span>
                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </span> Add</button>
              <Link to='/'><button className='btn ml-5 btn-warning btn-cart'><span>
              <i className="fa fa-home" aria-hidden="true"></i>
            </span> Back to Home</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
    : (
      <div className="container  not-found-area">
        <div className="row ">
          <div className="col not-found-content text-center">
            <h1>Invalid Product data</h1>
            <h3>Something went wrong</h3>
            <p>We're deeply sorry, there are no product about this data</p>
            <Link to="/menu">See our foods.</Link>
          </div>
        </div>
      </div>
    )
  }
    </>
  );
};

export default ItemDetails;
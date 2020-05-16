import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Auth';
import './Cart.css'
import CartItem from './CartItem';
import { withRouter, Link } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Stripe from '../Pages/Stripe';


const Cart = (props) => {
  const { cart, checkOutOrder} = useContext(UserContext)
  
  const stripePromise = loadStripe('pk_test_Kcu8VbYQQleA5MacGIj2eQep00EwEC1UyH');
  const [deliveryFee] = useState(2)
  const [vat] = useState(5)
  const [subTotal, setSubTotal] = useState(5)
  const [payInfo, setPayInfo] = useState(null)
  const [isPayed, setIsPayed] = useState(false);
  
  useEffect(()=> {
      let totalPrice = cart.reduce( (total, item) => total + item.proTotalPrice , 0 )
    setSubTotal(totalPrice)
  },[cart])

  useEffect(() => {
    if(payInfo){
      setIsPayed(true);
    }
  }, [payInfo])

  const handleCheckout = (payment) => {
    setPayInfo(payment)
    alert(`Your payment ID: ${payment.id} 
    And your card's last 4 digits are ${payment.last4}`)
    checkOutOrder()
    props.history.push('/checkout')
  }
  
if(cart.length === 0) {
  return (
    <div className="container pt-5 mt-5 text-center">
      <h1 className="text-center">You have no item</h1>
        <Link to="/menu" className="text-danger">See our foods.</Link>
    </div>
  )
}
  return (
    <div className="cart-container cart-area">
      <div id="order-area">
        <div  className="row d-flex justify-content-center">
          <div className="col-md-6 f-right">
            <div className="final-order-area">
              <div className="orders-items-area">
                {cart.map(item => <CartItem item={item} key={item.key} paymentInfo={isPayed} />)}
              </div>
              <div className="order-price-area">
                <div className="cart-item">
                  <div className="row">
                    <div className="col-md-8">
                      <h5>Subtotal: </h5>
                      <h5>Vat:</h5>
                      <h5>Deliver fee:</h5>
                      <h5>Total:</h5>
                    </div>
                    <div className="col-md-4 status">
                      <h5>$ <span id="sub-total-price">{subTotal.toFixed(2)}</span> </h5>
                      <h5>$ <span> {vat}.00</span> </h5>
                      <h5>$ <span>{deliveryFee}.00</span> </h5>
                      <h5>$ <span id="total-price">{(subTotal+vat+deliveryFee).toFixed(2)}</span> </h5>
                    </div>
                  </div>
                </div>
              </div>
                  <div id="payment-area">
                    <Elements stripe={stripePromise} >
                      <Stripe handleCheckout={handleCheckout}/>
                    </Elements>   
                  </div>
            </div>
         </div>
        </div>       
      </div>
    
      </div> 
  );
};

export default withRouter(Cart);
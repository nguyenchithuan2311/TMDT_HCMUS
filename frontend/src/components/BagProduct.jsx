import "../css/BagProduct.css";
import Nav from './nav';
import product from "../asset/img/shoe19_720x.webp"
import React, { useState, useEffect} from 'react';
import Paypal from "../asset/img/196566.png"
import axios from 'axios';
import { Buffer } from "buffer";
export const BagProduct = () => {
  
  const [cartOrder,setCartOrder ] = useState([]);
  function data()
  {
    axios({
      method: 'get',
      url: `http://localhost:4000/cart/cart/1`,
    })
      .then(result => {
        setCartOrder(result.data);
        
      })
      .catch(error => {
        console.error(error);
      });
  }
 data()
 var sum
 function x(){
  let sum=0;
  for(var i=0;i<cartOrder.length;i=i+1)
  {
    sum=sum+cartOrder[i].TOTAL
  }
  return sum
 }
 sum=x()
  return (
    <div>
    <Nav/>
    <div className="title">
      <text >Payment</text>
      </div>
      <div className="Attributes">
        <text className="stt">#</text>
        <text className="image">Image</text>
        <text className="nameProduct">Name Product</text>
        <text className="amount">Amount</text>
        <text className="price">Price</text>
        <text className="total">Total</text>
      </div>
      
      <hr></hr>
      
      {cartOrder.map((cartOrder,index)=>(
        
         <div className="listProduct">
            <p className="NumberProduct">{index+1}</p>
            <img src={`data:image/png;base64,${Buffer.from(cartOrder.IMAGE.data).toString("base64")}`} alt="" className="image_Product1"/>
            <p className="NameProduct1">{cartOrder.PNAME}</p>
            <p className="amount-1">{cartOrder.QUANTITY}</p>
            <p className="price-1">{cartOrder.PRICE}$</p>
            <p className="total-1">{cartOrder.TOTAL}$</p>
            </div>
      ))}
      
       
      
      <div className="total_Address">
      <div className="rectangleAddres">
      <div className="payment">
        
      </div>
      <div className="address">Address</div>
            <label className="address_street">Street:</label>
              <input type="text" className="street">
            </input>
      </div>
      <div className="total">
      <div className="rectanglePayment">
            <div className="title-p-t">Payment</div>
            
            <div className="title-p-m">Payment Methods</div>
            <label className="checkboxvnpay">
              <input className="stardust-checkbox__input-2" type="checkbox"></input>
             <img src={Paypal} className="paypal"/>
            </label>
            <div className="use-accumulated-points">Use Accumulated points:</div>
            
            <input className="use-point"></input>
        </div>
        <div className="rectangleTotal">
          <div className="title-p-t">Total</div>
          <div className="title_price">Price: {sum}</div>
          <div className="price"></div>
          <div className="title_price">Discounted Price</div>
          <div className="D_price"></div>

          <button onPress={()=> this.ponavigation.navigate('BagProduct')} className ="button_payment" >Confirm
          </button>
        </div>
      </div>
      </div>
  </div>
);
}
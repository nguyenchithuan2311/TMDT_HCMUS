import "../css/BagProduct.css";
import Nav from './nav';

//import icon_search from "../asset/img/magnifying-glass-solid.svg"
//import product from "../asset/img/shoe19_720x.webp"
//import bag from "../asset/img/bag-shopping-solid (1).svg"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { library } from "@fortawesome/fontawesome-svg-core";
import momo_image from "../asset/img/Logo-MoMo-Square.png"
import vnpay_image from "../asset/img/Icon VNPAY-QR.png"
//import { Label } from "@mui/icons-material";
import {StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
import Footer from "./Footer";

function BagProduct() {
  
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
          <div className="line-3"></div>
          <div className="listProduct"></div>
          <div className="payment">
            <div className="rectanglePayment">
                <div className="title-p-t">Payment</div>
                <div className="title-p-m">Payment Methods</div>
                <label className="checkboxmomo">
                  <input className="stardust-checkbox__input-1" type="checkbox"></input>
                  <img src={momo_image} alt="" className="momo-image"/>
                  <label className="momo">Momo</label>
                </label>
                <label className="checkboxvnpay">
                  <input className="stardust-checkbox__input-2" type="checkbox"></input>
                  <img src={vnpay_image} alt="" className="momo-image"/>
                  <label className="momo">Vnpay</label>
                </label>
                <div className="use-accumulated-points">Use Accumulated points:</div>
                <select name="use-point" id="use">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
            </div>
          </div>
          <div className="total">
            <div className="rectangleTotal">
              <div className="title-p-t">Total</div>
              <div className="title_price">Price</div>
              <div className="price"></div>
              <div className="title_price">Discounted Price</div>
              <div className="D_price"></div>

              <button onPress={()=> this.ponavigation.navigate('BagProduct')} className ="button_payment" >
                <div className="confirm">Confirm</div>
              </button>
            </div>
          </div>
          <div className="address">Address</div>
            <label className="city">City </label>
                <select name="city_c" id="city">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                <label className="district"> District </label>
                <select name="district_c" id="district">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <div></div>
                <label className="commune-town">Commune-Town:</label>
                <select name="commune-town_c" id="commune-town">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                <label className="address_street">Street:</label>
                  <input type="text" className="street">
                </input>
      </div>
    );
  }
  
  export default BagProduct;
  
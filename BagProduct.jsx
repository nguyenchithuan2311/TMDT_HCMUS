import "../css/BagProduct.css";
import Nav from './nav';
import product from "../asset/img/shoe19_720x.webp"
//import icon_search from "../asset/img/magnifying-glass-solid.svg"
//import product from "../asset/img/shoe19_720x.webp"
//import bag from "../asset/img/bag-shopping-solid (1).svg"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { library } from "@fortawesome/fontawesome-svg-core";
//import { Label } from "@mui/icons-material";
export const BagProduct = () => {return (
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
      <div className="listProduct">
        <p className="NumberProduct">1</p>
        <img src={product} alt="" className="image_Product1"/>
        <p className="NameProduct1">BAST SHOES</p>
        <p className="amount-1">1</p>
        <p className="price-1">100$</p>
        <p className="total-1">100$</p>
      </div>
      
      <div className="total_Address">
      <div className="rectangleAddres">
      <div className="payment">
        
      </div>
      <div className="address">Address</div>
      
        <label className="city">City </label>
            <select name="city_c" id="city">
              <option value="yes">HCM</option>
              <option value="no">Hanoi</option>
            </select>
            
            <label className="district"> District </label>
            <select name="district_c" id="district">
              <option value="yes">X</option>
              <option value="no">y</option>
            </select>
            
            <label className="commune-town">Commune-Town:</label>
            <select name="commune-town_c" id="commune-town">
              <option value="yes">X</option>
              <option value="no">Y</option>
            </select>
            
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
              <label className="momo">Paypal</label>
            </label>
            <div className="use-accumulated-points">Use Accumulated points:</div>
            
            <input className="use-point"></input>
        </div>
        <div className="rectangleTotal">
          <div className="title-p-t">Total</div>
          <div className="title_price">Price</div>
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
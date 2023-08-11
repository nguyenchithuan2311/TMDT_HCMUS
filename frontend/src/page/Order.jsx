import "../css/Order.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import order_image from "../asset/img/picture1.png";
import { faStar} from "@fortawesome/free-solid-svg-icons";
export const Order = () => {

    library.add(faStar);
  
    return (
      <div>
        <Nav/>   
        <img src={order_image} alt="" className="order_image"/>
        <div class="rectangle2-12">
            <div class="orders-list">ORDERS LIST</div>
            <div class="order-id">Order ID</div>
            <div class="user">User</div>
            <div class="phone">Phone</div>
            <div class="address">Address</div>
            <div class="status">Status</div>
            <div class="detail">Detail</div>
            <div class="line2-3"></div>
        </div>
        <div class="rectangle2-33">
            <div class="first">First</div>
        </div>
        <div class="rectangle2-35">
            <div class="_23">2</div>
        </div>
        <div class="rectangle2-34">
            <div class="last">Last</div>
        </div>
      </div>      
    );
  };
  


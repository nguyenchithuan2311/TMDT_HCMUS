import "../css/Order.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";
export const Order = () => {
    library.add(faStar);
  
    return (
      <div>
        <Nav/>   
        <div class="rectangle2-12">
            <div class="orders-list">ORDERS LIST</div>
            <div className="information2">
            <div class="order-id">Order ID</div>
            <div class="user">User</div>
            <div class="address">Address</div>
            <div class="status">Status</div>
            <div class="detail">Detail</div>
            </div>
            <div class="line2-3"></div>
            <div className="containerOrder">
            <div class="_1u">1</div>
            <div class="user_user">nguyenchithuan55@gmail.com</div>
            <div class="address_user">53 Đ. Quảng Hàm, Phường 5, Gò Vấp, Thành phố Hồ Chí Minh</div>
            <div class="status_goods">Processing</div>
            <button className="detail_goods" >Confirm</button>
            </div>
        </div>
      </div>      
    );
  };
  


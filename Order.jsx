import "../css/Order.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import orderdata from "../data/Orderdata";
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
            <div class="orderid">Order ID</div>
            <div class="user">User</div>
            <div class="address">Address</div>
            <div class="status">Status</div>
            <div class="detail">Detail</div>
            </div>
            {orderdata.map((orderdata) => (
    <div
      className="containerOrder"                  
    >     
    <div className="_1u">{orderdata.orderid}</div>         
    <div className="user_user">{orderdata.user}</div>     
    <div className="address_user">{orderdata.address}</div>           
    <div className="status_goods">{orderdata.status}</div>    
    <button className="detail_goods" >{orderdata.detail}</button>           
    </div>
    ))}
        </div>
      </div>      
    );
  };
  {orderdata.map((orderdata) => (
    <div
      className="containerOrder"                  
    >     
    <div className="_1u">{orderdata.orderid}</div>         
    <div className="user_user">{orderdata.user}</div>     
    <div className="address_user">{orderdata.address}</div>           
    <div className="status_goods">{orderdata.status}</div>    
    <button className="detail_goods" >{orderdata.detail}</button>           
    </div>
    ))}


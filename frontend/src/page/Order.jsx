import Nav from './nav';
import img_desktop from"../asset/img/desktop-slider.png"
import "../css/Order.css";
import Footer from "./Footer";

function Order() {
    return(
        <div>
            <Nav/>
            <div className="desktop-slider">
            <img src={img_desktop} className='img_desktop'/>
            </div>
            <div class="star-regular-2"></div>
            <div class="rectangle-12"></div>
            <div class="_0123456789">0123456789</div>
            <div class="_01234567892">0123456789</div>
            <div class="processing">Processing</div>
            <div class="processed">Processed</div>
            <div class="_1">1</div>
            <div class="nguyenchithuan-55-gmail-com">nguyenchithuan55@gmail.com</div>
            <div class="order-id">Order ID</div>
            <div class="user">User</div>
            <div class="phone">Phone</div>
            <div class="address">Address</div>
            <div class="status">Status</div>
            <div class="detail">Detail</div>
            <div class="line-3"></div>
            <div class="rectangle-31"></div>
            <div class="rectangle-37"></div>
            <div class="rectangle-36"></div>
            <div class="details">Details</div>
            <div class="delete">Delete</div>
            <div class="confirm">Confirm</div>
            <div class="rectangle-33"></div>
            <div class="rectangle-35"></div>
            <div class="_2">1</div>
            <div class="rectangle-34"></div>
            <div class="last">Last</div>
            <div class="first">First</div>
            <div class="orders-list">ORDERS LIST</div>
        </div>

    );
}

export default Order;
import "../css/Detailsproduct.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import product from "../asset/img/shoe19_720x.webp"
import { library } from "@fortawesome/fontawesome-svg-core";
import order_image from "../asset/img/picture1.png";
import { faStar} from "@fortawesome/free-solid-svg-icons";
export const Detailsproduct = () => {

    library.add(faStar);
  
    return (
      <div>
        <Nav/>   
        <img src={order_image} alt="" className="order_image"/>
        <img src={product} alt="" className="product"/>
        <div class="bast-shoed">Bast shoe</div>
        <div class="priced">Price:</div>
        <div class="_106-00">$106.00</div>
        <div class="sized">Size:</div>
        <button class="rectangled-10">
            <div class="_7">7</div>
        </button>
        <button class="rectangled-11">
            <div class="_8d">8</div>
        </button>
        <button class="rectangled-12">
             <div class="_9">9</div>
        </button>
        <div class="colord">Color:</div>
        <button class="rectangled-13"></button>
        <button class="rectangled-14"></button>
        <button class="rectangled-15"></button>
        <div class="quantityd">Quantity:</div>
        <button class="rectangled-16">
            <div class="">-</div>
        </button>
        <div class="rectangled-17">
            <div class="_1">1</div>
        </div>
        <button class="rectangled-18">
            <div class="">+</div>
        </button>
        <button class="rectangled-19">
            <div class="add-to-cart">ADD TO CART</div>
        </button>
        <button class="rectangled-20">
             <div class="buy-it-now">BUY IT NOW</div>
        </button>
      </div>      
    );
  };
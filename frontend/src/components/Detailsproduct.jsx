import "../css/Detailsproduct.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import product from "../asset/img/shoe19_720x.webp"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";
export const Detailsproduct = () => {

    library.add(faStar);
  
    return (
      <div>
        <Nav/>
        <div className="containerDetailsproduct">
        <img src={product} alt="" className="product"/>
        <div className="information">
        <div class="bast-shoed">Bast shoe</div>
        <div class="priced">Price:
            <div class="_106-00">$106.00</div>
        </div>
        
        <div class="sized">Size:
            <button class="rectangled-10">7</button>
            <button class="rectangled-11">8</button>
            <button class="rectangled-12">9</button>
        </div>
        <div class="colord">Color:
            <button class="rectangled-13"></button>
            <button class="rectangled-14"></button>
            <button class="rectangled-15"></button>
        </div>
        <div class="quantityd">Quantity:
            <button class="rectangled-16">
                <div class="">-</div>
            </button>
            <div class="rectangled-17">
                <div class="_1">1</div>
            </div>
            <button class="rectangled-18">+</button>
        </div>
        <div class='button'>
        <button class="rectangled-19">ADD TO CART</button>
        <button class="rectangled-20">BUY IT NOW</button>
        </div>
      </div>
      </div>
      </div>
    );
  };
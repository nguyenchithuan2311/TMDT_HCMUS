import "../App.css";
import Nav from './nav';

import icon_search from "../asset/img/magnifying-glass-solid.svg"
import product from "../asset/img/shoe19_720x.webp"
import bag from "../asset/img/bag-shopping-solid (1).svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faStar} from "@fortawesome/free-solid-svg-icons";

export const ManageProduct = () => {

  library.add(faStar);

  return (

    <div>
      <Nav/>
    <div className="SearchProduct">
        <img src={icon_search}></img>
        <input type="text" placeholder="search..."className="search">
        </input>
    </div>

    <div className="areaCategory">
        <div className="square">
            <h2 className="Category">Category</h2>
            <div className="container">
              <div className="type">Running</div>
              <div className="squaresmall">
                <p className="AmountCategory">1</p>
              </div>
            </div>
            
        </div>
    </div>
    <div className="Brands">
    <div className="squareBrands">
            <h2 className="Category">Brands</h2>
            <div className="container">
              <div className="type">Nike</div>
              <div className="squaresmall">
                <p className="AmountCategory">1</p>
              </div>
            </div>
        </div>
    </div>
    <div className="Product">
      <div className="introduce_product">
        <img src={product} alt="" className="image_Product"/>
        <p className="NameProduct">BAST SHOES</p>
        <hr></hr>
        <div className="item_Price">
        <p className="PriceProduct">$106.00</p>
        <img src={bag} alt="" className="bag"/>
        </div>
      </div>
      <div className="introduce_product">
        <img src={product} alt="" className="image_Product"/>
        <p className="NameProduct">BAST SHOES</p>
        <hr></hr>
        <div className="item_Price">
        <p className="PriceProduct">$106.00</p>
        <img src={bag} alt="" className="bag"/>
        </div>
      </div>
      <div className="introduce_product">
        <img src={product} alt="" className="image_Product"/>
        <p className="NameProduct">BAST SHOES</p>
        <hr></hr>
        <div className="item_Price">
        <p className="PriceProduct">$106.00</p>
        <img src={bag} alt="" className="bag"/>
        </div>
      </div>
      <div className="introduce_product">
        <img src={product} alt="" className="image_Product"/>
        <p className="NameProduct">BAST SHOES</p>
        <hr></hr>
        <div className="item_Price">
        <p className="PriceProduct">$106.00</p>
        <img src={bag} alt="" className="bag"/>
        </div>
      </div>
      <div className="introduce_product">
        <img src={product} alt="" className="image_Product"/>
        <p className="NameProduct">BAST SHOES</p>
        <hr></hr>
        <div className="item_Price">
        <p className="PriceProduct">$106.00</p>
        <img src={bag} alt="" className="bag"/>
        </div>
      </div>
      <div className="introduce_product">
        <img src={product} alt="" className="image_Product"/>
        <p className="NameProduct">BAST SHOES</p>
        <hr></hr>
        <div className="item_Price">
        <p className="PriceProduct">$106.00</p>
        <img src={bag} alt="" className="bag"/>
        </div>
      </div>
      
      <div className="Pageing">
      <div className="squarePageing">First</div>
      <div className="squarePageing">1</div>
      <div className="squarePageing">Last</div>
      </div>
    </div>
    </div>
  );
};


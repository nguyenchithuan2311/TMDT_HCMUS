import "../css/Managecustomer.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";
export const Managecustomer = () => {

    library.add(faStar);
  
    return (
      <div>
        <Nav/>
        <div class="containerManageCustomer">
        <div className="container1">
        <div class="rectangle6-11">
            <div class="catagories">Catagories</div>
            <button class="all-catagories">All Catagories</button>
            <button class="gold">Gold</button>
            <button class="sliver">Sliver</button>
            <button class="bronze">Bronze</button>
        </div> 
        <div class="rectangle6-38">
            <div class="times">Times</div>
            <label className="Days"for="rectangle6-22">
            <input type="checkbox" className="rectangle6-22" />DAYS
            </label>
            <label className="Days"for="rectangle6-39">
            <input type="checkbox" className="rectangle6-39" />MONTHS
            </label>
            <label className="Days"for="rectangle6-41">
            <input type="checkbox" className="rectangle6-41" />YEARS
            </label>
        </div>
        </div>
        <div className="container2">
        <div class="rectangle6-13">
            <div class="user-list1">USER LIST</div>
            <div className="information1">
            <div class="diff">#</div>
            <div class="name2">Name</div>
            <div class="loyalty-points">Loyalty Points</div>
            <div class="voucher-points">Voucher points</div>
            <div class="customer-levels">Customer levels</div>
            </div>
            <div class="line3-3"></div>
            <div class="user1">
            <div class="_1m">1</div>
            <div class="thuanm">Thuan</div>
            <div class="_100m">100</div>
            <div class="_50m">50</div>
            <div class="sliverm">Sliver</div>
            </div>
            <div class="user1">
            <div class="_1m">2</div>
            <div class="thuanm">Thuan</div>
            <div class="_100m">100</div>
            <div class="_50m">50</div>
            <div class="sliverm">Sliver</div>
            </div>
            <div class="user1">
            <div class="_1m">3</div>
            <div class="thuanm">Thuan</div>
            <div class="_100m">100</div>
            <div class="_50m">50</div>
            <div class="sliverm">Sliver</div>
            </div>
            
        </div>
      </div>
      </div>
      </div>
    );
  };
  
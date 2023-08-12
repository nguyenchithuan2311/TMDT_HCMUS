import "../css/User.css"
import Nav from './nav';

import icon_search from "../asset/img/magnifying-glass-solid.svg"
import product from "../asset/img/shoe19_720x.webp"
import bag from "../asset/img/bag-shopping-solid (1).svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";export const User = () => {

  library.add(faStar);

  return (
    <div>
      <Nav/>
    <div class="rectangle1-12">
        <div class="user-list">USER LIST</div>
        <div className="containerUser1">
                <div class="dif">#</div>
                <div class="name1">First Name</div>
                <div class="name2">Last Name</div>
                <div class="email">Email</div>
                <div class='time1'>Created At</div>
                <div class='time2'>Modified At</div>
                </div>
                <div class="line1-3"></div>
                <div className="containerUser2">
                <div class="_1u">1</div>
                <div class="thuanu">Thuan</div>
                <div class="thuanu">Nguyen</div>
                <div class="nguyenchithuan-55-gmail-com">nguyenchithuan55@gmail.com</div>
                <div class="nguyenchithuan-55-gmail-com">12/08/2023</div>
                <div class="nguyenchithuan-55-gmail-com">13/08/2023</div>
                </div>
    </div>
    </div>
  );
};


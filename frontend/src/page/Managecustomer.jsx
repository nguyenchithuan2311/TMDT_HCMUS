import "../css/Managecustomer.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import order_image from "../asset/img/picture1.png";
import image_Product from "../asset/img/shoe19_720x.webp"
import { faStar} from "@fortawesome/free-solid-svg-icons";
export const Managecustomer = () => {

    library.add(faStar);
  
    return (
      <div>
        <Nav/>   
        <img src={order_image} alt="" className="order1_image"/>
        <div class="rectangle6-11">
            <div class="catagories">Catagories</div>
            <button class="all-catagories">All Catagories</button>
            <button class="gold">Gold</button>
            <button class="sliver">Sliver</button>
            <button class="bronze">Bronze</button>
        </div> 
        <div class="rectangle6-38">
            <div class="times">Times</div>
            <input type="checkbox" className="rectangle6-22" />
            <div class="days">DAYS</div>
            <input type="checkbox" className="rectangle6-39" />
            <div class="months">MONTHS</div>
            <input type="checkbox" className="rectangle6-40" />
            <div class="quarters">QUARTERS</div>
            <input type="checkbox" className="rectangle6-41" />
            <div class="years">YEARS</div>
        </div>   
        <div class="rectangle6-12">
             <div class="user-list">USER LIST</div>
             <svg
                class="star-1"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <g clip-path="url(#clip0_93_151)">
                    <path
                    d="M14.9948 0C15.474 0 15.9115 0.294531 16.1198 0.764648L19.6927 8.76797L27.6719 10.048C28.1406 10.1217 28.5312 10.4785 28.6771 10.9713C28.8229 11.4641 28.7031 11.9965 28.3698 12.359L22.5833 18.6008L23.9479 27.4141C24.026 27.9238 23.8333 28.4393 23.4479 28.7451C23.0625 29.051 22.5469 29.085 22.1302 28.8414L14.9948 24.6953L7.86459 28.8357C7.44271 29.0793 6.93229 29.0453 6.54688 28.7395C6.16146 28.4336 5.96354 27.9182 6.04167 27.4084L7.40625 18.5951L1.61979 12.359C1.28125 11.9965 1.16667 11.4584 1.3125 10.9713C1.45834 10.4842 1.84896 10.1273 2.31771 10.048L10.2969 8.76797L13.8698 0.764648C14.0833 0.294531 14.5156 0 14.9948 0ZM14.9948 4.47461L12.2604 10.6031C12.0781 11.0053 11.7292 11.2885 11.3177 11.3564L5.15625 12.342L9.63021 17.1621C9.91667 17.4736 10.0521 17.9154 9.98438 18.3516L8.92708 25.1314L14.4063 21.9482C14.776 21.733 15.2188 21.733 15.5833 21.9482L21.0625 25.1314L20.0104 18.3572C19.9427 17.9211 20.0729 17.4793 20.3646 17.1678L24.8385 12.3477L18.6771 11.3564C18.2708 11.2885 17.9167 11.0109 17.7344 10.6031L14.9948 4.47461Z"
                    fill="black"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_93_151">
                    <rect width="30" height="29" fill="white" />
                    </clipPath>
                </defs>
                </svg>
                <svg
                    class="vector"
                    width="28"
                    height="30"
                    viewBox="0 0 28 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M13.7444 0C14.2235 0 14.661 0.294531 14.8694 0.764648L18.4423 8.76797L26.4214 10.048C26.8902 10.1217 27.2808 10.4785 27.4267 10.9713C27.5725 11.4641 27.4527 11.9965 27.1194 12.359L21.3329 18.6008L22.6975 27.4141C22.7756 27.9238 22.5829 28.4393 22.1975 28.7451C21.8121 29.051 21.2964 29.085 20.8798 28.8414L13.7444 24.6953L6.61416 28.8357C6.19228 29.0793 5.68187 29.0453 5.29645 28.7395C4.91103 28.4336 4.71312 27.9182 4.79124 27.4084L6.15582 18.5951L0.369366 12.359C0.0308248 11.9965 -0.0837585 11.4584 0.0620748 10.9713C0.207908 10.4842 0.598533 10.1273 1.06728 10.048L9.04645 8.76797L12.6194 0.764648C12.8329 0.294531 13.2652 0 13.7444 0ZM13.7444 4.47461L11.01 10.6031C10.8277 11.0053 10.4787 11.2885 10.0673 11.3564L3.90582 12.342L8.37978 17.1621C8.66624 17.4736 8.80166 17.9154 8.73395 18.3516L7.67666 25.1314L13.1558 21.9482C13.5256 21.733 13.9683 21.733 14.3329 21.9482L19.8121 25.1314L18.76 18.3572C18.6923 17.9211 18.8225 17.4793 19.1142 17.1678L23.5881 12.3477L17.4267 11.3564C17.0204 11.2885 16.6662 11.0109 16.4839 10.6031L13.7444 4.47461Z"
                        fill="black"
                    />
                    </svg>
                    <svg
                        class="star-3"
                        width="30"
                        height="29"
                        viewBox="0 0 30 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <g clip-path="url(#clip0_93_155)">
                            <path
                            d="M14.9948 0C15.474 0 15.9115 0.294531 16.1198 0.764648L19.6927 8.76797L27.6719 10.048C28.1406 10.1217 28.5312 10.4785 28.6771 10.9713C28.8229 11.4641 28.7031 11.9965 28.3698 12.359L22.5833 18.6008L23.9479 27.4141C24.026 27.9238 23.8333 28.4393 23.4479 28.7451C23.0625 29.051 22.5469 29.085 22.1302 28.8414L14.9948 24.6953L7.86459 28.8357C7.44271 29.0793 6.93229 29.0453 6.54688 28.7395C6.16146 28.4336 5.96354 27.9182 6.04167 27.4084L7.40625 18.5951L1.61979 12.359C1.28125 11.9965 1.16667 11.4584 1.3125 10.9713C1.45834 10.4842 1.84896 10.1273 2.31771 10.048L10.2969 8.76797L13.8698 0.764648C14.0833 0.294531 14.5156 0 14.9948 0ZM14.9948 4.47461L12.2604 10.6031C12.0781 11.0053 11.7292 11.2885 11.3177 11.3564L5.15625 12.342L9.63021 17.1621C9.91667 17.4736 10.0521 17.9154 9.98438 18.3516L8.92708 25.1314L14.4063 21.9482C14.776 21.733 15.2188 21.733 15.5833 21.9482L21.0625 25.1314L20.0104 18.3572C19.9427 17.9211 20.0729 17.4793 20.3646 17.1678L24.8385 12.3477L18.6771 11.3564C18.2708 11.2885 17.9167 11.0109 17.7344 10.6031L14.9948 4.47461Z"
                            fill="black"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_93_155">
                            <rect width="30" height="29" fill="white" />
                            </clipPath>
                        </defs>
                        </svg>
            <div class="diff">#</div>
            <div class="name2">Name</div>
            <div class="loyalty-points">Loyalty Points</div>
            <div class="voucher-points">Voucher points</div>
            <div class="customer-levels">Customer levels</div>
            <div class="line3-3"></div>
            <div class="_1m">1</div>
            <div class="thuanm">Thuan</div>
            <div class="_100m">100</div>
            <div class="_50m">50</div>
            <div class="sliverm">Sliver</div>

        </div>
        <button class="rectangle6-33">
            <div class="first1">First</div>
        </button>
        <button class="rectangle6-35">
            <div class="_22">2</div>
        </button>
        <button class="rectangle6-34">
            <div class="last">Last</div>
        </button>
      </div>      
    );
  };
  
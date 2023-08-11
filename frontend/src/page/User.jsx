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
    <div className="rectangle1-10">       
        <input type="text" placeholder="search..."className="search">
        </input>
    </div>   
    <div class="rectangle1-11">
        <div class="sign-up-timeline">Sign up timeline</div>
        <button class="rectangle1-13">
            <div class="clear">Clear</div>
            <svg
                class="xmark-solid-1"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M2.37187 6.17695C1.65572 5.66425 1.65572 4.83163 2.37187 4.31894C3.08801 3.80624 4.25104 3.80624 4.96718 4.31894L11 8.64199L17.0385 4.32304C17.7547 3.81035 18.9177 3.81035 19.6339 4.32304C20.35 4.83574 20.35 5.66835 19.6339 6.18105L13.5953 10.5L19.6281 14.823C20.3443 15.3357 20.3443 16.1684 19.6281 16.681C18.912 17.1937 17.749 17.1937 17.0328 16.681L11 12.358L4.96145 16.6769C4.24531 17.1896 3.08228 17.1896 2.36614 16.6769C1.64999 16.1643 1.64999 15.3316 2.36614 14.8189L8.40468 10.5L2.37187 6.17695Z"
                    fill="white"
                />
                </svg>
        </button>
        <input type="checkbox" className="rectangle1-15" />       
        <div class="january">January</div>
        <input type="checkbox" className="rectangle1-25" />
        <div class="february">February</div>
        <input type="checkbox" className="rectangle1-14" />
        <div class="march">March</div>
        <input type="checkbox" className="rectangle1-24" />
        <div class="april">April</div>
        <input type="checkbox" className="rectangle1-23" />
        <div class="may">May</div>
        <input type="checkbox" className="rectangle1-22" />
        <div class="june">June</div>
        <input type="checkbox" className="rectangle1-21" />
        <div class="july">July</div>
        <input type="checkbox" className="rectangle1-20" />
        <div class="august">August</div>
        <input type="checkbox" className="rectangle1-19" />
        <div class="september">September</div>
        <input type="checkbox" className="rectangle1-18" />
        <div class="october">October</div>
        <input type="checkbox" className="rectangle1-17" />
        <div class="november">November</div>
        <input type="checkbox" className="rectangle1-16" />
        <div class="december">December</div>        
        <button class="rectangle1-26">
            <svg
                class="pencil-solid-1"
                width="17"
                height="13"
                viewBox="0 0 17 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <g clip-path="url(#clip0_9_243)">
                    <path
                    d="M13.6233 5.86522L13.9985 5.57831L12.8729 4.71757L10.811 3.14081L9.68543 2.28007L9.31023 2.56698L8.55984 3.14081L1.94578 8.19862C1.60046 8.46268 1.34812 8.79022 1.20867 9.14823L0.0332762 12.2053C-0.0497316 12.4185 0.0266356 12.6496 0.235815 12.807C0.444995 12.9644 0.743823 13.0228 1.02273 12.9619L5.01707 12.0631C5.48523 11.9564 5.91355 11.7635 6.25886 11.4994L12.8729 6.44159L13.6233 5.86522ZM5.31257 10.141L5.01042 10.7174C4.87761 10.7961 4.7282 10.8545 4.56882 10.8926L1.97234 11.4766L2.73601 9.49354C2.7825 9.36913 2.86218 9.25487 2.96511 9.15585L3.71882 8.92479V9.73729C3.71882 9.96073 3.95789 10.1435 4.25007 10.1435H5.31257V10.141ZM12.0428 0.474792L11.5647 0.842957L10.8143 1.41678L10.4358 1.7037L11.5614 2.56444L13.6233 4.1412L14.7489 5.00194L15.1241 4.71503L15.8745 4.1412L16.3559 3.77303C17.186 3.13827 17.186 2.10995 16.3559 1.47518L15.051 0.474792C14.221 -0.159973 12.8762 -0.159973 12.0462 0.474792H12.0428ZM10.469 4.74042L5.68777 8.39667C5.48191 8.55409 5.14324 8.55409 4.93738 8.39667C4.73152 8.23925 4.73152 7.98026 4.93738 7.82284L9.71863 4.16659C9.92449 4.00917 10.2632 4.00917 10.469 4.16659C10.6749 4.32401 10.6749 4.583 10.469 4.74042Z"
                    fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_9_243">
                    <rect width="17" height="13" fill="white" />
                    </clipPath>
                </defs>
                </svg>
            <div class="apply">Apply</div>
        </button>       
    </div>
    <div class="rectangle1-12">
        <div class="user-list">USER LIST</div>
        <button class="rectangle1-27">
            <div class="all">All</div>
        </button>
        <button class="rectangle1-29">
            <div class="locked">Locked</div>
        </button>
        <button class="rectangle1-28">
            <div class="active">Active</div>
        </button>
        <svg
            class="star-11"
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <g clip-path="url(#clip0_23_15)">
                <path
                d="M14.9948 0C15.474 0 15.9115 0.294531 16.1198 0.764648L19.6927 8.76797L27.6719 10.048C28.1406 10.1217 28.5312 10.4785 28.6771 10.9713C28.8229 11.4641 28.7031 11.9965 28.3698 12.359L22.5833 18.6008L23.9479 27.4141C24.026 27.9238 23.8333 28.4393 23.4479 28.7451C23.0625 29.051 22.5469 29.085 22.1302 28.8414L14.9948 24.6953L7.86459 28.8357C7.44271 29.0793 6.93229 29.0453 6.54688 28.7395C6.16146 28.4336 5.96354 27.9182 6.04167 27.4084L7.40625 18.5951L1.61979 12.359C1.28125 11.9965 1.16667 11.4584 1.3125 10.9713C1.45834 10.4842 1.84896 10.1273 2.31771 10.048L10.2969 8.76797L13.8698 0.764648C14.0833 0.294531 14.5156 0 14.9948 0ZM14.9948 4.47461L12.2604 10.6031C12.0781 11.0053 11.7292 11.2885 11.3177 11.3564L5.15625 12.342L9.63021 17.1621C9.91667 17.4736 10.0521 17.9154 9.98438 18.3516L8.92708 25.1314L14.4063 21.9482C14.776 21.733 15.2188 21.733 15.5833 21.9482L21.0625 25.1314L20.0104 18.3572C19.9427 17.9211 20.0729 17.4793 20.3646 17.1678L24.8385 12.3477L18.6771 11.3564C18.2708 11.2885 17.9167 11.0109 17.7344 10.6031L14.9948 4.47461Z"
                fill="black"
                />
            </g>
            <defs>
                <clipPath id="clip0_23_15">
                <rect width="30" height="29" fill="white" />
                </clipPath>
            </defs>
            </svg>
            <svg
                class="vector1"
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
                    class="star-31"
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g clip-path="url(#clip0_23_19)">
                        <path
                        d="M14.9948 0C15.474 0 15.9115 0.294531 16.1198 0.764648L19.6927 8.76797L27.6719 10.048C28.1406 10.1217 28.5312 10.4785 28.6771 10.9713C28.8229 11.4641 28.7031 11.9965 28.3698 12.359L22.5833 18.6008L23.9479 27.4141C24.026 27.9238 23.8333 28.4393 23.4479 28.7451C23.0625 29.051 22.5469 29.085 22.1302 28.8414L14.9948 24.6953L7.86459 28.8357C7.44271 29.0793 6.93229 29.0453 6.54688 28.7395C6.16146 28.4336 5.96354 27.9182 6.04167 27.4084L7.40625 18.5951L1.61979 12.359C1.28125 11.9965 1.16667 11.4584 1.3125 10.9713C1.45834 10.4842 1.84896 10.1273 2.31771 10.048L10.2969 8.76797L13.8698 0.764648C14.0833 0.294531 14.5156 0 14.9948 0ZM14.9948 4.47461L12.2604 10.6031C12.0781 11.0053 11.7292 11.2885 11.3177 11.3564L5.15625 12.342L9.63021 17.1621C9.91667 17.4736 10.0521 17.9154 9.98438 18.3516L8.92708 25.1314L14.4063 21.9482C14.776 21.733 15.2188 21.733 15.5833 21.9482L21.0625 25.1314L20.0104 18.3572C19.9427 17.9211 20.0729 17.4793 20.3646 17.1678L24.8385 12.3477L18.6771 11.3564C18.2708 11.2885 17.9167 11.0109 17.7344 10.6031L14.9948 4.47461Z"
                        fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_23_19">
                        <rect width="30" height="29" fill="white" />
                        </clipPath>
                    </defs>
                    </svg>
                <div class="dif">#</div>
                <div class="name1">Name</div>
                <div class="email">Email</div>
                <div class="action">Action</div>
                <div class="detail1">Detail</div>
                <div class="line1-3"></div>
                <div class="_1u">1</div>
                <div class="thuanu">Thuan</div>
                <div class="nguyenchithuan-55-gmail-com">nguyenchithuan55@gmail.com</div>
                <svg
                    class="rectangle1-30"
                    width="74"
                    height="27"
                    viewBox="0 0 74 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g filter="url(#filter0_d_23_32)">
                        <path
                        d="M0 3C0 1.34315 1.34315 0 3 0H71C72.6569 0 74 1.34315 74 3V24C74 25.6569 72.6569 27 71 27H3C1.34314 27 0 25.6569 0 24V3Z"
                        fill="#ED2715"
                        fill-opacity="0.85"
                        shape-rendering="crispEdges"
                        />
                    </g>
                    <defs>
                        <filter
                        id="filter0_d_23_32"
                        x="-4"
                        y="0"
                        width="82"
                        height="35"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                        >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_23_32"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_23_32"
                            result="shape"
                        />
                        </filter>
                    </defs>                    
                    </svg>
                <div class="block">Block</div>
                <svg
                    class="rectangle1-32"
                    width="74"
                    height="27"
                    viewBox="0 0 74 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g filter="url(#filter0_d_23_38)">
                        <path
                        d="M0 3C0 1.34315 1.34315 0 3 0H71C72.6569 0 74 1.34315 74 3V24C74 25.6569 72.6569 27 71 27H3C1.34314 27 0 25.6569 0 24V3Z"
                        fill="#22D605"
                        fill-opacity="0.85"
                        shape-rendering="crispEdges"
                        />
                    </g>
                    <defs>
                        <filter
                        id="filter0_d_23_38"
                        x="-4"
                        y="0"
                        width="82"
                        height="35"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                        >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_23_38"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_23_38"
                            result="shape"
                        />
                        </filter>
                    </defs>
                    </svg>
                <div class="unblock">Unblock</div>
                <div class="rectangle1-31"></div>
                <div class="details5">Details</div>
               

                <div class="rectangle1-33">
                    <div class="first111">First</div>
                </div>
                <div class="rectangle1-35">
                    <div class="_222">2</div>
                </div>
                <div class="rectangle1-34">
                    <div class="last">Last</div>
                </div>
    </div>
    </div>
  );
};


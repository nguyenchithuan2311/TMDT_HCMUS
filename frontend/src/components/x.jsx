// import "../css/Detailsproduct.css"
// import Nav from "./nav"
// import icon_search from "../asset/img/magnifying-glass-solid.svg";
// import product from "../asset/img/shoe19_720x.webp"
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faStar} from "@fortawesome/free-solid-svg-icons";
// import React, { useState, useEffect, useMemo } from 'react';
// import axios from 'axios';
// import { Buffer } from "buffer";
// import { useNavigate } from "react-router-dom";

// export const Detailsproduct = () => {
//     const [productDetail,setProductDetail ] = useState([{productDetail:[]}]);
//     const currentUrl = window.location.href.slice(37, window.location.href.length);
//     const navigate=useNavigate()
//     var size=[] 
//     var color=[]
//     const [imageData, setImageData] = useState(Buffer.from('...'));
//     const [sizePick, setSize] = useState(1)
//     const [colorPick, setColor] = useState('')
//     function addToCart(){
//       let product_id = '';
//       for(product in productDetail){
//         if(product.SIZE === sizePick && product.COLOR === colorPick) product_id = product.ID
//       }
//       axios({
//           method: 'post',
//           url: http://localhost:4000/cart,
//           data: {
//               PRODUCT_ID: product_id,
//               SESSION_ID: localStorage.getItem('session'),
//               QUANTITY: amount,
//               TOTAL: amount * productDetail[0].PRICE  
//             }
//         })
//       .then(response => {
//           console.log('reached');
//       })
//       .catch(error => {
//           console.log(error);
//       });;
//   }

//   function buyItNow(){
//     addToCart()
//     navigate("/BagProduct")
//   }


//   useEffect(()=>{
//       axios({
//         method: 'get',
//         url: http://localhost:4000/product/customer/${currentUrl},
//       })
//         .then(result => {
//           setProductDetail(result.data);
//           setImageData(Buffer.from(productDetail[0].IMAGE.data).toString("base64"));
//         })
//         .catch(error => {
//           console.error(error);
//         });
      
//   }, [productDetail]);
//     library.add(faStar);
//     const[amount,setamount]=useState(1)
//     const incrementNumber = () => {
//         setamount(amount + 1);
//       };
//       const decreamentNumber = () => {
//         setamount(amount - 1);
//         if(amount<=1)
//         {
//             setamount(1);
//         }
//       };
//     function hanldeSize()
//     {
//       for(let i=0;i<productDetail.length;i=i+1)
//       {
//         color.push(productDetail[i].COLOR)
//         size.push(productDetail[i].SIZE)
//       }
//       size = Array.from(new Set(size));
//       color = Array.from(new Set(color));
//     }
//     hanldeSize()
//     return (
//       <div>
//         <Nav/>
//         <div className="containerDetailsproduct">
//         <img src={`data:image/png;base64,${imageData}`} alt="" className="product"/>
//         <div className="information">
//         <div class="bast-shoed">Name: {productDetail[0].PNAME}</div>
//         <div class="priced">Price:
//             <div class="_106-00">{productDetail[0].PRICE}.00$</div>
//         </div>
        
//         <div class="sized">
//           <p>Size:</p>
//         {size.map((size)=> (
//             <button class="rectangled-10" onClick={() => setSize(size)}>
//               {size}
//             </button>
//           ))}
//         </div>

//         <div class="colord">
//           <p>Color:</p>
//         {color.map((colors)=> (
//             <button class="rectangled-13" onClick={() => setColor(colors)} style={{backgroundColor:`${colors}`}}>
//             </button>
//           ))}
//         </div>

//         <div class="quantityd">
//           <p>Quantity:</p>
//             <button class="rectangled-16">
//                 <div class=""onClick={decreamentNumber}>-</div>
//             </button>
//             <div class="rectangled-17">
//                 <div class="_1">{amount}</div>
//             </div>
//             <button class="rectangled-18" onClick={incrementNumber}>+</button>
//         </div>

//         <div class='button'>
//         <button onClick = {addToCart} class="rectangled-19">ADD TO CART</button>
//         <button onClick = {buyItNow} class="rectangled-20">BUY IT NOW</button>
//         </div>
//       </div>
//       </div>
//       </div>
//     );
//   };
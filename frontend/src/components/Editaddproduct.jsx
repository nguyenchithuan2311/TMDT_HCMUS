import "../css/Editaddproduct.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import React, { useState, useEffect } from 'react';
import product from "../asset/img/shoe19_720x.webp"
import { library } from "@fortawesome/fontawesome-svg-core";
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
import { faStar} from "@fortawesome/free-solid-svg-icons";
export const Editaddproduct = () => {
    // const [name,setName]=useState('')
    // const [address,setAdd]=useState('')
    // const [email,setEmail]=useState('')
    // const [Tel,setTel]=useState('')
    
    //   useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:4000/user/1',
    //       })
    //     .then(response => {
    //       setName(response.data[0].FIRST_NAME)
    //       setAdd(response.data[0].ADDR_LINE1)
    //       setEmail(response.data[0].USERNAME)
    //       setTel(response.data[0].TEL)      
    //     });
    //   }, []);
   
    library.add(faStar);
    const [showSelect, setShowSelect] = useState(false);
    const [showFileInput, setShowFileInput] = useState(false);
    return (
      <div>
        <Nav/>   
        <div class="rectanglee-7">
            <div class="edit-product">Edit Product</div>
            <div class="product-namee">Product Name</div>
            <input type="text" class="rectanglee-1"/>
            <div className="containerEdit">
                <div className="brand-container">
                    <div class="brand">Brand</div>
                    <input type="text" class="rectanglee-2"/>
                </div>
            <div class="price-container">
            <div class="pricee">Price</div>
            <input type="text" class="rectanglee-10"/>
            </div>
            <div class="gender-container">
            <div class="gender">Gender</div>
                <select class="rectanglee-12">
                    <option value="option1">Nam</option>
                    <option value="option2">Nữ</option>
                    <option value="option3">Khác</option>
                </select>
                </div>
            </div> 
            <div className="containerEdit">
            <div className="height-container">
            <div class="height">Size</div>
            <input type="text" class="rectanglee-3"/>
            </div>
            <div className="color-container">
            <div class="colore">Color</div>
            <input type="text" class="rectanglee-11"/>
            </div>
            <div className="category-container">
            <div class="categorye">Category</div>
                <select className="rectanglee-14">
                    <option value="option1">Running</option>
                    <option value="option2">Nike</option>
                    <option value="option3">Khác</option>
                </select>
            </div>
            </div>
            <div class="imagee">Image</div>
                <input type="file" className="rectanglee-15" onClick={() => setShowFileInput(true)}/>             
        </div>
        <button class="rectanglee-8">Save Product</button>
      </div>      
    );
  };
  
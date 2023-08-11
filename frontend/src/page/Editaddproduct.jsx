import "../css/Editaddproduct.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import React, { useState } from 'react';
import product from "../asset/img/shoe19_720x.webp"
import { library } from "@fortawesome/fontawesome-svg-core";
import order_image from "../asset/img/picture1.png";

import { faStar} from "@fortawesome/free-solid-svg-icons";
export const Editaddproduct = () => {

    library.add(faStar);
    const [showSelect, setShowSelect] = useState(false);
    const [showFileInput, setShowFileInput] = useState(false);
    return (
      <div>
        <Nav/>   
        <img src={order_image} alt="" className="order_image"/>
        <div class="rectanglee-7">
            <div class="edit-product">Edit Product</div>
            <div class="product-namee">Product Name</div>          
            <div class="rectanglee-1"></div>
            <div class="brand">Brand</div>
            <div class="rectanglee-2"></div>
            <div class="pricee">Price</div>
            <div class="rectanglee-10"></div>
            <div class="gender">Gender</div>
            {showSelect ? (
                <select>
                    <option value="option1">Nam</option>
                    <option value="option2">Nữ</option>
                    <option value="option3">Khác</option>
                </select>
                ) : (
                <div
                    className="rectanglee-12"
                    onClick={() => setShowSelect(true)}
                >
                    Select Gender
                </div>
                )}
            <div class="height">Height</div>
            <div class="rectanglee-3"></div>
            <div class="colore">Color</div>
            <div class="rectanglee-11"></div>
            <div class="categorye">Category</div>
            {showSelect ? (
                <select>
                    <option value="option1">Nam</option>
                    <option value="option2">Nữ</option>
                    <option value="option3">Khác</option>
                </select>
                ) : (
                <div
                    className="rectanglee-14"
                    onClick={() => setShowSelect(true)}
                >
                    Select Gender
                </div>
                )}
            <div class="imagee">Image</div>
            {showFileInput ? (
                <input type="file" />
            ) : (
                <div className="rectanglee-15" onClick={() => setShowFileInput(true)}>
                Click to chose file
                </div>
            )}                
        </div>
        <button class="rectanglee-8">
            <div class="save-product">Save Product</div>
        </button>
      </div>      
    );
  };
  
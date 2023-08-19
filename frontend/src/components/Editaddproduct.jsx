import "../css/Editaddproduct.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import React, { useState, useEffect } from 'react';
import product from "../asset/img/shoe19_720x.webp"
import { library } from "@fortawesome/fontawesome-svg-core";
import axios from 'axios';

import { faStar} from "@fortawesome/free-solid-svg-icons";
export const Editaddproduct = () => {
    const [id,setID]=useState('')
    const [pname,setPName]=useState('')
    const [brand,setBrand]=useState('')
    const [price,setPrice]=useState('')
    const [size,setSize]=useState('')
    const [color,setColor]=useState('')
    const [gender,setGender]=useState('')
    const [category,setCategory]=useState('')
    const [image,setImage]=useState('')
    function updateProduct(){
        axios({
            method: 'patch',
            url: `http://localhost:4000/product/1`,
            data: {
                ID:id,
                NAME:pname,
                SIZE: size,
                GENDER: gender,
                CATEGORY: category,
                PRICE: price,
                BRAND: brand,
                COLOR: color,
                //IMAGE: image,
              }
          })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });;
    }
      useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:4000/product/1`,
          })
        .then(response => {
            setID(response.data[0].PID)
            setPName(response.data[0].PNAME)
            setBrand(response.data[0].BRAND)
            setPrice(response.data[0].PRICE)
            setSize(response.data[0].SIZE)
            setColor(response.data[0].COLOR)
            setGender(response.data[0].GENDER)
            setCategory(response.data[0].NAME)
            setImage(response.data[0].IMAGE)      
        });
      }, []);
    
    library.add(faStar);
    const [showSelect, setShowSelect] = useState(false);
    const [showFileInput, setShowFileInput] = useState(false);
    return (
      <div>
        <Nav/>   
        <div className="rectanglee-7">
            <div className="edit-product">Edit Product</div>
            <div className="product-namee">Product Name</div>
            <input type="text" className="rectanglee-1" value = {pname} onChange={(event) => setPName(event.target.value)}/>
            <div className="containerEdit">
                <div className="brand-container">
                    <div className="brand">Brand</div>
                    <input type="text" className="rectanglee-2" value = {brand} onChange={(event) => setBrand(event.target.value)}/>
                </div>
            <div className="price-container">
            <div className="pricee">Price</div>
            <input type="text" className="rectanglee-10" value = {price} onChange={(event) => setPrice(event.target.value)}/>
            </div>
            <div className="gender-container">
            <div className="gender">Gender</div>
                <select className="rectanglee-12" defaultValue = {gender} onChange={(event) => setGender(event.target.value)}>
                    <option value="MEN">MEN</option>
                    <option value="WOMEN">WOMEN</option>
                    <option value="KIDS">KIDS</option>
                </select>
            </div>
            </div> 
            <div className="containerEdit">
            <div className="height-container">
            <div className="height">Size</div>
            <input type="text" className="rectanglee-3" value = {size} onChange={(event) => setSize(event.target.value)}/>
            </div>
            <div className="color-container">
            <div className="colore">Color</div>
            <input type="text" className="rectanglee-11" value = {color} onChange={(event) => setColor(event.target.value)}/>
            </div>
            <div className="category-container">
            <div className="categorye">Category</div>
                <select className="rectanglee-14" defaultValue = {category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="RUNNING">RUNNING</option>
                    <option value="FOOTBALL">FOOTBALL</option>
                    <option value="CASUAL">CASUAL</option>
                    <option value="FORMAL">FORMAL</option>
                </select>
            </div>
            </div>
            <div className="imagee">Image</div>
                <input type="file" className="rectanglee-15" onClick={() => setShowFileInput(true)}/>             
        </div>
        <button onClick={updateProduct} className="rectanglee-8">Save Product</button>
      </div>      
    );
  };
  
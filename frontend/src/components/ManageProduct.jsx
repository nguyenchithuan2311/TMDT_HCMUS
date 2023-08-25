import "../App.css";
import Nav from './nav';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import icon_search from "../asset/img/magnifying-glass-solid.svg"
import product from "../asset/img/shoe19_720x.webp"
import Image from 'react-image';
import {Buffer} from 'buffer';
import bag from "../asset/img/bag-shopping-solid (1).svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";
export const ManageProduct = () => {
  const [PNAME,setName]=useState('')
    const [PRICE,setPrice]=useState('')
    const [imageData, setImageData]=useState('')
    const [Tel,setTel]=useState('')

    function updateProduct(){
        axios({
            method: 'patch',
            url: `http://localhost:4000/product/1`,
            data: {
                // PNAME: PNAME,
                // ADDR_LINE1:address,
                // USERNAME: email,
                // TEL: Tel,
                // ID: localStorage.getItem('session'),
              }
          })
        .then(response => {
            console.log('reached');
        })
        .catch(error => {
            console.log(error);
        });;
    }
      useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:4000/product/`,
          })
        .then(response => {
          // setName(response.data[0].FIRST_NAME)
          // setAdd(response.data[0].ADDR_LINE1)
          setImageData(Buffer.from(response.data[0].IMAGE.data))
          // setTel(response.data[0].TEL)      
        });
      }, []);
      const base64Data = imageData.toString("base64")
      console.log(base64Data)
library.add(faStar);

  return (
    <div>
      <Nav/>
    <div Name="MannageProductCotainer">
    <div className="SearchProduct">
        <img src={icon_search}></img>
        <input type="text" placeholder="search..."className="search">
        </input>
    </div>
    <div className="MannageProductCotainer_big">
    <div className="MannageProductCotainer_small1">
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
    </div>
    <div className="MannageProductCotainer_small2">
    <div className="Product">
      <div className="introduce_product">
        <img src={product} alt="" className="image_Product"/>
        <p className="NameProduct">BAST SHOES</p>
        <hr></hr>
        <div className="item_Price">
        <p className="PriceProduct">$106.00</p>
        <img src={bag} alt="" className="bag"/>

        
        </div>
        {/* <Image
        data={imageData}
        width={100}
        height={100}
        /> */}
        <img src={`data:image/png;base64,${base64Data}`} alt="" className="image_Product"/>
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
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};


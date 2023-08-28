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
import { useNavigate, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
//import { read, readSync } from "fs";

export const ManageProduct = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const navigate=useNavigate()
      useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:4000/product/`,
          })
        .then(response => {
          console.log(response.data)
          setProducts(response.data)
          //setImageData(Buffer.from(response.data[0].IMAGE.data))     
        });
      }, []);
      //const base64Data = imageData.toString("base64")
      function handleKeyDown(event){
        if (event.key === 'Enter') {
          // 👇 Get input value
            axios({
                method: 'get',
                url: `http://localhost:4000/product/search/${search}`,
              })
            .then(response => {

              setProducts(response.data)  
            });
        }
      };
library.add(faStar);

  return (
    <div>
      <Nav/>
    <div Name="MannageProductCotainer">
    <div className="SearchProduct">
        <img src={icon_search}></img>
        <input type="text" placeholder="search..."className="search" onChange={(event) => setSearch(event.target.value)} onKeyDown={handleKeyDown}>
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
    <ul>
    {products.slice(currentPage * 6, (currentPage + 1) * 6).map((PRODUCT) => (<div className="introduce_product"><Link to={`/Editaddproduct/${PRODUCT.ID}`} >
        <img src={product} alt="" className="image_Product" />
        <p className="NameProduct">{PRODUCT.PNAME}</p>
        <hr></hr>
        <div className="item_Price">
          <p className="PriceProduct">${PRODUCT.PRICE}</p>
          <img src={bag} alt="" className="bag"/>
        </div>
        </Link>
      </div>))}
      </ul>
      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

import "../App.css";
import search from "../asset/img/magnifying-glass-solid.svg"
import bag from "../asset/img/bag-shopping-solid (1).svg"
<<<<<<< Updated upstream:my-app/src/page/nav.jsx
import BagProduct from "./BagProduct";
=======
//import BagProduct from "./BagProduct";
>>>>>>> Stashed changes:frontend/src/page/nav.jsx
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';


export const Nav = () => {
  return (
    <div className="nav">
        <div className="topNav">
            <a>Login/Register</a>
            <hr></hr>
        </div>
        <div className="midNav">
            <div className="midNavleft">KING SHOES</div>
            <div className="midNavmid">
                <nav>
                <a href="/profile">Profile</a>
                <a href="#">Shop</a>
                <a href="#">Product</a> 
                <a href="#">User</a>
                <a href="#">Admin</a>
                <a href="#">Revenue</a>
                </nav>
            </div>
            <div className="midNavright">
                <img className="searchNav" src={search}></img>
                <input className="searchInput"type="box" placeholder="Search"></input>
                <img className="bagProduct"src={bag}></img>
                <TouchableOpacity onPress={()=> this.ponavigation.navigate('BagProduct')} >
                <Image
                source ={bag}
                resizeode ="stretch"
                />
                </TouchableOpacity>
            </div>
        </div>
        <div className="botNav"></div>
    </div>

  );
};
export default Nav;


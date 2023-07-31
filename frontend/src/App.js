import { Login } from './page/login';
import { ManageProduct} from './page/ManageProduct';
import React from "react";
import { Route, Router,Routes } from "react-router-dom";
import BagProduct from './page/BagProduct';
import Profile from './page/Profile';
//import Menu  from './page/Menu';
import Nav from './page/nav';
import Footer from './page/Footer';
import Order from './page/Order'
import ManageCus from './page/ManageCus';


function App() {
  
  return (
    <div className="App">
      <Order/>
    </div>
  );
}

export default App;
//ManageProduct
//BagProduct
//Login
//Profile
//ManageCus
//Order
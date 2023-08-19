import "../css/Revenue.css";
import Nav from "./nav";
import { library } from "@fortawesome/fontawesome-svg-core";
import image_Product from "../asset/img/shoe19_720x.webp";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [    
    {
      label: " ",
      data: [4, 2, 8],
      fill: false,
      borderColor: "#742774"
    }
  ]
};
const options = {
  scales: {
    y: {
      stepSize: 2,
      beginAtZero: true

    }
  },
  plugins: {
    title: {
      display: true,
      text: 'Revenue'
    }
  }
}

export const Revenue = () => {    
 
    library.add(faStar);
   
    return (
      <div>
        <Nav />
        
        <div className="rectangle-11">
          <div className="catagories">Catagories</div>
          <div className="days1">DAYS</div>
          <div className="months1">MONTHS</div>
          <div className="quarters1">QUARTERS</div>
          <div className="years1">YEARS</div>
        </div>     
        <div class="user-list">REVENUE</div>   
        <div className="chart-container">
        
        <Line data={data} options={options} />
        </div>
      </div>      
    );
};

  
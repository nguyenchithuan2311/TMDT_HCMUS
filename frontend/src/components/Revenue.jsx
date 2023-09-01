import "../css/Revenue.css";
import Nav from "./nav";
import {library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";

export const Revenue = () => {    
  var [revenue3,setRevenue3]=useState({
    labels: ["a","b"],
    datasets: [    
      {
        label: " ",
        data: [1,2],
        fill: false,
        borderColor: "#742774"
      }
    ]
  })
  useEffect(() => {
    var total=[]
    var date=[]
      axios({
        method: 'get',
        url: `http://localhost:4000/order/order/revenue`,
      })
      .then(response => {
        for(var i=0;i<response.data.length;i=i+1)
        {
          total.push(response.data[i].total)
          date.push(response.data[i].MODIFIED_AT)
        }
      });
      setRevenue3({
        labels: date,
        datasets: [    
          {
            label: " ",
            data: total,
            fill: false,
            borderColor: "#742774"
          }
        ]
      
    })
    }
    ,[]);
    var options = {
      
      scales: {
        y: {
          stepSize: 2,
          beginAtZero: true,
          ticks: {
            autoSkip: true
          }
    
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Revenue'
        },
        
      },
      
    }
    library.add(faStar);
    return (
      <div>
        <Nav />
        
        <div className="rectangle-11">
          <div className="catagories">Catagories</div>
          <div className="days1" onClick={(e)=>{
            var total=[]
            var date=[]
              axios({
                method: 'get',
                url: `http://localhost:4000/order/order/revenue`,
              })
              .then(response => {
                for(var i=0;i<response.data.length;i=i+1)
                {
                  total.push(response.data[i].total)
                  date.push(response.data[i].MODIFIED_AT)
                }
              });
              console.log(total)
              console.log(date)
              setRevenue3({
                labels: date,
                datasets: [    
                  {
                    label: " ",
                    data: total,
                    fill: true,
                    borderColor: "#742774"
                  }
                ]
              
            })
    console.log(revenue3)
    ;}}>DAYS</div>
          <div className="months1" onClick={(e)=>{
            var total=[]
            var date=[]
            axios({
        method: 'get',
        url: `http://localhost:4000/order/order/month`,
      })
      .then(response => {
        for(var i=0;i<response.data.length;i=i+1)
        {
          total.push(response.data[i].total)
          date.push(response.data[i].MODIFIED_AT)
        }
        
        
      });
      setRevenue3({
        labels: date,
        datasets: [    
          {
            label: " ",
            data: total,
            fill: true,
            borderColor: "#742774"
          }
        ]
      
    })
    console.log(revenue3)
    ;}}>MONTHS</div>
          <div className="years1" onClick={(e)=>{
            var total=[]
            var date=[]
              axios({
                method: 'get',
                url: `http://localhost:4000/order/order/year`,
              })
              .then(response => {
                for(var i=0;i<response.data.length;i=i+1)
                {
                  total.push(response.data[i].total)
                  date.push(response.data[i].MODIFIED_AT)
                }
              });
              console.log(total)
              console.log(date)
              setRevenue3({
                labels: date,
                datasets: [    
                  {
                    label: " ",
                    data: total,
                    fill: true,
                    borderColor: "#742774"
                  }
                ]
              
            })
    ;}}>YEARS</div>
        </div>     
        <div class="user-list">REVENUE
        <div className="chart-container">
        <Line data={revenue3} options={options} redraw={true} />
        </div>
        </div>   
        
      </div>      
    );
};

  
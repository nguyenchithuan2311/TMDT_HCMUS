import "../css/Managepointadmin.css"
import Nav from "./nav"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";

export const Managepointadmin = () => {
  var [point,setpoint]=useState({
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
        url: `http://localhost:4000/point/pointVolatilityDay`,
      })
      .then(response => {
        for(var i=0;i<response.data.length;i=i+1)
        {
          total.push(response.data[i].amountTotal)
          date.push(response.data[i].date)
        }
      });
      setpoint({
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
          stepSize: 10000,
          beginAtZero: true,
          
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
        <Nav/>
        <div className="containerpointadmin">
          <div className="container1">

        <div class="rectangle4-11">
          <div class="prieod">Prieod</div>
            <div  className="Days"for="rectangle4-22" onClick={(e)=>{
            var total=[]
            var date=[]
              axios({
                method: 'get',
                url: `http://localhost:4000/point/pointVolatilityDay`,
              })
              .then(response => {
                for(var i=0;i<response.data.length;i=i+1)
                {
                  total.push(response.data[i].amountTotal)
                  date.push(response.data[i].date)
                }
              });
              setpoint({
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
    console.log(point)
    ;}}>
            DAYS
            </div> 
            <div  className="Days"for="rectangle4-39" onClick={(e)=>{
            var total=[]
            var date=[]
              axios({
                method: 'get',
                url: `http://localhost:4000/point/pointVolatilityMonth`,
              })
              .then(response => {
                for(var i=0;i<response.data.length;i=i+1)
                {
                  total.push(response.data[i].amountTotal)
                  date.push(response.data[i].date)
                }
              });
              setpoint({
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
            var element = document.elementFromPoint(1000, 50);
            console.log(element)
            element.click();
    ;}}>
            MONTHS
            </div> 
            <div  className="Days"for="rectangle4-41" onClick={(e)=>{
            var total=[]
            var date=[]
              axios({
                method: 'get',
                url: `http://localhost:4000/point/pointVolatilityYear`,
              })
              .then(response => {
                for(var i=0;i<response.data.length;i=i+1)
                {
                  total.push(response.data[i].amountTotal)
                  date.push(response.data[i].date)
                }
              });
              setpoint({
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
    ;}}>
            YEARS
            </div>                   
        </div>
        </div>
        <div className="containerpoint">
        <div class="rectangle6-12">
            <div class="user-list">REVENUE
            <Line data={point} options={options} redraw={true}></Line>
            </div>
        </div>
      </div>
      </div>
      </div>      
    );
  };

  
  
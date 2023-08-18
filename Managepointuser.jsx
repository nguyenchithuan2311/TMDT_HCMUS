import "../css/Managepointuser.css"
import Nav from "./nav"
import icon_search from "../asset/img/magnifying-glass-solid.svg";
import { library } from "@fortawesome/fontawesome-svg-core";

import image_Product from "../asset/img/shoe19_720x.webp"
import { faStar} from "@fortawesome/free-solid-svg-icons";
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
  
  export const Managepointuser = () => {
  
      library.add(faStar);
    
      return (
        <div>
          <Nav/>
          <div className="containerpointadmin">
            <div className="container1">
          <div class="rectangle4-9">
              <div class="criteria">Criteria</div>
              <button class="criteria-1">Criteria 1</button>
              <button class="criteria-2">Criteria 2</button>
              <button class="criteria-3">Criteria 3</button>
          </div>
          <div class="rectangle4-11">
            <div class="prieod">Prieod</div>
              <label  className="Days"for="rectangle4-22">
              <input type="checkbox" className="rectangle4-22" />DAYS
              </label> 
              <label  className="Days"for="rectangle4-39">
              <input type="checkbox" className="rectangle4-39" />MONTHS
              </label> 
              <label  className="Days"for="rectangle4-41">
              <input type="checkbox" className="rectangle4-41" />YEARS
              </label>                   
          </div>
          </div>
          <div className="container2">        
              <div class="user-list">REVENUE</div>
              <div className="chart-container">
          <Line data={data} options={options} />
          </div>
          
        </div>
        </div>
        </div>      
      );
    };
  
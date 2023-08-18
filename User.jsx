import "../css/User.css"
import Nav from './nav';
import axios from "axios";
import userdata from "../data/Userdata";
import React, { useState, useEffect } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";export const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const [selectedMonths, setSelectedMonths] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  library.add(faStar);

  return (
    <div>
      <Nav/>
      <div class="rectangle1-12">
        <div class="user-list">USER LIST</div>
        <div className="containerUser1">
                <div class="dif">#</div>
                <div class="name1">First Name</div>
                <div class="name2">Last Name</div>
                <div class="email">Email</div>
                <div class='time1'>Created At</div>
                <div class='time2'>Modified At</div>
                </div>          
                {userdata.map((userdata) => (
                <div
                  className="containerUser2"                  
                >     
                <div className="_1u">{userdata.dif}</div>         
                <div className="thuanu">{userdata.name1}</div>     
                <div className="thuanu">{userdata.name2}</div>           
                <div className="nguyenchithuan-55-gmail-com">{userdata.email}</div>    
                <div className="nguyenchithuan-55-gmail-com">{userdata.time1}</div> 
                <div className="nguyenchithuan-55-gmail-com">{userdata.time2}</div>        
                </div>
                ))}
           
                
    </div>
    </div>
  );
};


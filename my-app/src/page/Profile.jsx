import Nav from './nav';
import {StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
import img_desktop from"../asset/img/desktop-slider.png"
import "../css/Profile.css";
import { Label } from '@mui/icons-material';
import Footer from './Footer';

function Profile() {  
    return (
        <div>
            <Nav/>
            <div className="desktop-slider">
            <img src={img_desktop} className='img_desktop'/>
            </div>
            <div className="user-profile">
                <div className="t-user-profile">User Profile</div>
            </div>
            <div className="user-detail">
                <div className='t-user-detail'>User Detail Profile</div>
                <label className="Name"> Name </label>
                  <input type="text" className="input-name">
                </input>
                <label className='address'> Address </label>
                <input type="text" className="input-address">
                </input>
                <div></div>
                <label className='email-address'> Email Address </label>
                <input type="text" className="input-email-address">
                </input>
                <label className="phone-number"> Phone Number </label>
                <input type="text" className="input-phone-number">
                </input>
            </div>
            
            <button className ="button_back">Back to User</button>
            <Footer/>
        </div>
        

    );
}

export default Profile;
import "./App.css";
import img from './asset/img/img-01.png';
export const Desktop1 = () => {
  return (
    <div className="desktop-1">
        <div className="desktop-1-item">
        <div className="member-login">Member Login</div>
        <div class="wrap-input100 validate-input">
        <input class="input100" type="email" name="email" placeholder="Email"/>
        <span class="focus-input100"></span>
        <span class="symbol-input100">
        </span>
        </div>
        <div class="wrap-input100 validate-input">
        <input class="input200" type="password" name="password" placeholder="Password"/>
        <span class="focus-input100"></span>
        <span class="symbol-input100">
        </span>
        </div>
        
        <button className="rectangle-div">
        <div className="login">LOGIN</div>
        </button>
        </div>
        <div className="forgot-usernamepassword">
        <span>{`Forgot `}</span>
        <a href="#" className="usernamepassword">Username/Password</a>
        </div>
        <img className="img-01-1-icon" src={img}/>
    </div>
  );
};


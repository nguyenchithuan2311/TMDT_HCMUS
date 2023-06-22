import "../App.css";
import img from '../asset/img/img-01.png';
import vector from '../asset/img/right-long-solid.svg'
export const Login = () => {
  return (
    <div className="desktop-1">
        <div className="desktop-1-item">
        <div className="member-login">Member Login</div>
        
        <input class="input100" type="email" name="email" placeholder="Email"/>
        <input class="input200" type="password" name="password" placeholder="Password"/>
        
        
        <button className="rectangle-div">
        <div className="login">LOGIN</div>
        </button>
        
        <div className="forgot-usernamepassword">
        <span>{`Forgot `}</span>
        <a href="#" className="usernamepassword">Username/Password</a>
        </div>
        <img className="img-01-1-icon" src={img}/>
        <div className="New_account">
          <a href="#">Create your account</a>
          <img className="vector" src={vector}></img>
          </div>
          </div>
    </div>
  );
};


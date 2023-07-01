import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import Logo from "../assets/img/foodvilla.jpg";
import { Link } from "react-router-dom";


const LoggedInUser =()=>{
  //API call to check authentication
  return false;
}

const Header = () => {
   
 
   // use useState for user logged in or logged out
   const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div className="header">

      <div className="logo-container">
        {/* <img className="logo" src={LOGO_URL} /> */}
        <img className="logo" src={Logo} />
      </div>
      
      <div className="nav-items">
        <ul>
          
          <Link to="/"> <li>Home</li> </Link>
          <Link to="/about"> <li>About Us</li> </Link>
          <Link to="/contact"><li>Contact Us</li></Link> 
          <li>Cart</li>
          <Link to="/instamart"><li>Instamart</li></Link> 
        </ul>
      </div>

     {/* {
        // js expression & Statement
       (   a=1,console.log(a) )
     } */}

     

      { isLoggedin ? (
              <button className="logout-btn" onClick={() => setIsLoggedin(false)}>Logout </button>
            ) : (
            <button className="login-btn" onClick={() => setIsLoggedin(true)}>Login</button>
            )  
      }

     
    </div>
  );
};

export default Header;
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";


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
        <img className="logo" src={LOGO_URL} />
      </div>
      
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
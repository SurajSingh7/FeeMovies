import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import Logo from "../assets/img/foodvilla.jpg";
import { Link } from "react-router-dom";


const Header = () => {
   
  return (
    
     <div className="flex justify-between items-center p-3 h-16 bg-black">

      <div className="text-3xl text-red-800 font-bold">
            Tube<span className="text-yellow-50 bg-clip-text font-bold">Movies</span>
      </div>

      <div className="text-3xl text-yellow-100 font-bold">
            <h1>Welcome to my website coming soon </h1>
      </div>

      <div className="">
      <button className="search-btn p-2 m-2 bg-green-400 hover:bg-gray-500 text-black rounded-md" >
            Login/Signup</button>
      </div>

     </div> 
    
  );
};

export default Header;
import {Link} from "react-router-dom";

const Navigation=()=>{
  
    return (
    
        // <div className="flex justify-between items-center p-3 h-16 bg-pink-100 shadow-lg">
    
   
        
        <ul className="flex justify-between items-center p-3 h-16 bg-pink-100 shadow-lg flex-wrap">
               <a href="/">     <l1 className="search-btn p-2 m-2 bg-green-400 hover:bg-gray-500 text-black rounded-md font-extrabold">HOME </l1>  </a>
              {/* <Link to="/">     <l1 className="search-btn p-2 m-2 bg-green-400 hover:bg-gray-500 text-black rounded-md ">HOME </l1>  </Link> */}
              <Link to="/bollywood" >  <l1 className="search-btn p-2 m-2 bg-green-400 hover:bg-gray-500 text-black rounded-md font-extrabold">BOLLYWOOD </l1>  </Link>
              <Link to="/southHindiDubbed" >  <l1 className="search-btn p-2 m-2 bg-green-400 hover:bg-gray-500 text-black rounded-md font-extrabold">SOUTH HINDI DUBBED</l1>  </Link>
              <Link to="/popularMovies" >  <l1 className="search-btn p-2 m-2 bg-green-400 hover:bg-gray-500 text-black rounded-md font-extrabold">POPULAR MOVIES</l1>  </Link>
              <Link to="/englishMovies" >  <l1 className="search-btn p-2 m-2 bg-green-400 hover:bg-gray-500 text-black rounded-md font-extrabold">WEB SERIES</l1>  </Link>
              <Link to="/mostViewedMovies" >  <l1 className="search-btn p-2 m-2 bg-green-400 hover:bg-gray-500 text-black rounded-md font-extrabold">MOST VIEWED MOVIES</l1>  </Link>
              <Link to="/hollywoodHindi" >  <l1 className="search-btn p-2 m-2 bg-green-400 hover:bg-gray-500 text-black rounded-md font-extrabold">HOLLYWOOD(HINDI)</l1>  </Link>
            
         </ul>
   
        // {/* </div>  */}
       
     );


};

export default Navigation;
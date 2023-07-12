// Body part- 2
import { moviesList} from "../utils/constants";
import MovieCard from "./MovieCard";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import Shimmer from "./Shimmer";


const Body=()=>{

       
        const [searchText,setSearchText]=useState();
        const[page,setPage]=useState(1);
        const ItemInOnePage=20;

        const [errorMessage, setErrorMessage] = useState("");
      
        const [allMovies, setAllMovies] = useState([]);
        const [filteredMovies, setFilteredMovies] = useState([]);

        useEffect(()=>{
           getMovies();
        },[]);

        
        async function getMovies() {
          // handle the error using try... catch
          try {
            // const data = await fetch(swiggy_api_URL);
            // const json = await data.json();
            // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            // console.log(json?.data?.cards[2]?.data?.data?.cards);
            
            setAllMovies(moviesList);
            setFilteredMovies(moviesList);
            
          } catch (error) {
            console.log(error);
          }
        }


          // use searchData function and set condition if data is empty show error message
        const searchData = (searchText, movies) => {
             if (searchText !== "" && searchText!=null) {
                const data = filterData(searchText, movies);
                setFilteredMovies(data)
                 setErrorMessage("");
                 if (data.length === 0) {
                 setErrorMessage(
                `Sorry, we couldn't find any results for "${searchText}"`
                   );
                 } 
                }
                 else {
                setErrorMessage("");
                setFilteredMovies(movies);
               }
             };

     
       
    return (allMovies.length==0)?<Shimmer/>: (
       
       <>
        <div className="search-container p-6 h-8 bg-pink-50  items-center flex justify-center ">
        
            <input type="text" className="search-input w-[500] h-8 flex " placeholder="  Search" 
             value={searchText} onChange={(e)=>{ 
              setSearchText(e.target.value); 
              searchData(e.target.value, allMovies);
              }} />

            <button className="search-btn p-1  bg-gray-500 hover:bg-pink-400 text-black  " onClick={()=>{  
              searchData(searchText, allMovies);

            }}>  Search</button>

        </div>

      
        {(errorMessage!="")?<div className="error-container">{errorMessage}</div>:""}

        <div className="flex flex-wrap items-center justify-center">
            
              
               {
                filteredMovies.slice(ItemInOnePage*(page-1),page*ItemInOnePage).map((movie) =>{
                    return(
                       <Link to={"/movie/"+movie.id} key={movie.id} >
                          <MovieCard {...movie} />
                        </Link>  
                    );
                })
              }


              {
                 <div className="search-container p-6 w-[1280] h-8 bg-pink-50  items-center flex justify-center ">

                   <button className="search-btn p-1  bg-gray-500 hover:bg-pink-400 text-black rounded-sm  " onClick={()=>{  
                      {(page<=1)?setPage(Math.ceil(filteredMovies.length/ItemInOnePage)):setPage(page-1)}
                 }}>
                 Prev</button>

                <div className="bg-white p-1 pl-3 pr-4">
                   <h1> {page==0?1:page} of {Math.ceil(filteredMovies.length/ItemInOnePage)==0?1:Math.ceil(filteredMovies.length/ItemInOnePage)} </h1>
                </div>

                 <button className="search-btn p-1  bg-gray-500 hover:bg-pink-400 text-black rounded-sm " onClick={()=>{  
                   {(page>=Math.ceil(filteredMovies.length/ItemInOnePage))?setPage(1):setPage(page+1)}
                 }}>
                 Next</button>
     
                 </div>
              }
        
        </div>


        </>
    );
};

export default Body;
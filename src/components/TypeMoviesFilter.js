// Body part- 2
import { TypeMovieObj, moviesList } from "../utils/constants";
import MovieCard from "./MovieCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData, filterDataType } from "../utils/helper";


const MoviesFilter=({moviestext})=>{
         
        const searchText=moviestext;
        const [allMovies, setAllMovies] = useState([]);

        const[page,setPage]=useState(1);
        const ItemInOnePage=5;


        useEffect(()=>{
           getMovies();
        },[]);

        
        async function getMovies() {
          try {
            // const data = await fetch(swiggy_api_URL);
            // const json = await data.json();
            // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setAllMovies(moviesList);
        
          } catch (error) {
            console.log(error);
          }
        }

      
    // if(allRestaurants.length==0) return (<Shimmer/>);

    const movieTypefilter =filterDataType(searchText,allMovies);

    return (allMovies.length==0)?<Shimmer/>: (
       
       <>
       <div className="search-container p-6 h-8 bg-pink-50 my- items-center flex justify-center font-extrabold ">
             <h1> LIST OF {TypeMovieObj[searchText]}</h1>
       </div>

        <div className="flex flex-wrap justify-center">
            {   
                
                movieTypefilter.slice(ItemInOnePage*(page-1),page*ItemInOnePage).map((movie) =>{
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
                      {(page<=1)?setPage(Math.ceil(movieTypefilter.length/ItemInOnePage)):setPage(page-1)}
                 }}>
                 Prev</button>

                <div className="bg-white p-1 pl-3 pr-4"> 
                  {/* <h1>  {page} of {Math.ceil(data.length/ItemInOnePage)}  </h1>  */}
                  <h1> {page==0?1:page} of {Math.ceil(movieTypefilter.length/ItemInOnePage)==0?1:Math.ceil(movieTypefilter.length/ItemInOnePage)} </h1>
                </div>

                 <button className="search-btn p-1  bg-gray-500 hover:bg-pink-400 text-black rounded-sm " onClick={()=>{  
                   {(page>=Math.ceil(movieTypefilter.length/ItemInOnePage))?setPage(1):setPage(page+1)}
                 }}>
                 Next</button>
     
                 </div>

              }

        
        </div>

        </>
    );
};

export default MoviesFilter;
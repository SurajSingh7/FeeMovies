// Body part- 2
import { restaurantList,swiggy_api_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";


const MoviesFilter=({moviestext})=>{
         
      
       console.log(moviestext);

        const [searchText,setSearchText]=useState(moviestext);
        const [allRestaurants, setAllRestaurants] = useState([]);

        const[page,setPage]=useState(1);
        const ItemInOnePage=5;


        useEffect(()=>{
           getRestaurants();
        },[]);

        
        async function getRestaurants() {
          try {
            const data = await fetch(swiggy_api_URL);
            const json = await data.json();
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        
          } catch (error) {
            console.log(error);
          }
        }

      
    // if(allRestaurants.length==0) return (<Shimmer/>);

    const data =filterData(searchText,allRestaurants);

    return (allRestaurants.length==0)?<Shimmer/>: (
       
       <>
       <div className="search-container p-6 h-8 bg-pink-50 my- items-center flex justify-center ">
             <h1>{searchText}</h1>
       </div>

        <div className="flex flex-wrap justify-center">
            {   
                
                data.slice(ItemInOnePage*(page-1),page*ItemInOnePage).map((restaurant) =>{
                    return(
                       <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id} >
                          <RestaurantCard {...restaurant.data} />
                        </Link>  
                    );
                })
            }


               {
                 <div className="search-container p-6 w-[1280] h-8 bg-pink-50  items-center flex justify-center ">

                   <button className="search-btn p-1  bg-gray-500 hover:bg-pink-400 text-black rounded-sm  " onClick={()=>{  
                      {(page<=1)?setPage(Math.ceil(data.length/ItemInOnePage)):setPage(page-1)}
                 }}>
                 Prev</button>

                <div className="bg-white p-1 pl-3 pr-4"> <h1>  {page} of {Math.ceil(data.length/ItemInOnePage)}  </h1> </div>

                 <button className="search-btn p-1  bg-gray-500 hover:bg-pink-400 text-black rounded-sm " onClick={()=>{  
                   {(page>=Math.ceil(data.length/ItemInOnePage))?setPage(1):setPage(page+1)}
                 }}>
                 Next</button>
     
                 </div>

              }

        
        </div>

        </>
    );
};

export default MoviesFilter;
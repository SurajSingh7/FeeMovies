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

        <div className="flex flex-wrap">
            {   
                
                data.map((restaurant) =>{
                    return(
                       <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id} >
                          <RestaurantCard {...restaurant.data} />
                        </Link>  
                    );
                })
            }
        
        </div>

        </>
    );
};

export default MoviesFilter;
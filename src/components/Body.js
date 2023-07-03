// Body part- 2
import { restaurantList,swiggy_api_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import Shimmer from "./Shimmer";


const Body=()=>{

       
        const [searchText,setSearchText]=useState();

      
        const [allRestaurants, setAllRestaurants] = useState([]);
        const [filteredRestaurants, setFilteredRestaurants] = useState([]);

        useEffect(()=>{
           getRestaurants();
        },[]);

        
        async function getRestaurants() {
          // handle the error using try... catch
          try {
            const data = await fetch(swiggy_api_URL);
            const json = await data.json();
            // updated state variable restaurants with Swiggy API data

            // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            
            setAllRestaurants(restaurantList);
            setFilteredRestaurants(restaurantList);
            
          } catch (error) {
            console.log(error);
          }
        }


    return (allRestaurants.length==0)?<Shimmer/>: (
       
       <>
        <div className="search-container p-6 h-8 bg-pink-50  items-center flex justify-center ">

            <input type="text" className="search-input w-[500] h-8 flex " placeholder="  Search" 
             value={searchText} onChange={(e)=>{ setSearchText(e.target.value); }} />

            <button className="search-btn p-1  bg-gray-500 hover:bg-pink-400 text-black  " onClick={()=>{  
              // need to filter the data 
              const data =filterData(searchText,allRestaurants);
              // update the state -restaurants
              // {(searchText==="")? setFilteredRestaurants(allRestaurants): setFilteredRestaurants(data);}
              setFilteredRestaurants(data);
            }}>
            Search</button>

        </div>

        <div className="flex flex-wrap items-center justify-center">
            {   
              

                filteredRestaurants.map((restaurant) =>{
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

export default Body;
// Body part- 2
import { restaurantList,swiggy_api_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";



function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }


const Body=()=>{

       
        const [searchText,setSearchText]=useState();

        // fetch()
        // const [restaurants,setrestaurants]=useState([]);
        const [allRestaurants, setAllRestaurants] = useState([]);
        const [filteredRestaurants, setFilteredRestaurants] = useState([]);
        // console.log(restaurants);

        useEffect(()=>{
           getRestaurants();
        },[]);

        
        async function getRestaurants() {
          // handle the error using try... catch
          try {
            const data = await fetch(swiggy_api_URL);
            const json = await data.json();
            // updated state variable restaurants with Swiggy API data

            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
          } catch (error) {
            console.log(error);
          }
        }


    // if(filteredRestaurants.length==0) return <h1>No Restaurant match your filter!!</h1>


    return (allRestaurants.length==0)?<Shimmer/>: (
       
       <>
        <div className="search-container">

            <input type="text" className="search-input" placeholder="Seakrch" 
             value={searchText} onChange={(e)=>{ setSearchText(e.target.value); }} />

            <button className="search-btn" onClick={()=>{  
              // need to filter the data 
              const data =filterData(searchText,allRestaurants);
              // update the state -restaurants
              setFilteredRestaurants(data);
            }}>
            Search</button>
        </div>

        <div className="restaurant-list">
            {   
                
                filteredRestaurants.map((restraunt) =>{
                    return(
                          <RestaurantCard {...restraunt.data} key={restraunt.data.id} />
                    );
                })
            }
        
        </div>

        </>
    );
};

export default Body;
import { useState,useEffect} from "react";
import { restaurantList } from "./constants";


const useRestaurant=(resId)=>{
  
    
    const [restaurant, setRestaurant] = useState(null); 

    useEffect(() => {
      getRestaurantInfo(); 
    }, []);
  
    async function getRestaurantInfo() {
      try {
        // const data = await fetch(swiggy_api_URL);
        // const json = await data.json();
        // updated state variable restaurants with Swiggy API data
       
        // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        // console.log(json?.data?.cards[2]?.data?.data?.cards);
        setRestaurant(restaurantList[resId]);
        
        console.log(restaurantList[resId]);
        // console.log(restaurantList);
        
      } catch (error) {
        console.log(error);
      }
    }


    return restaurant;
}

export default useRestaurant;
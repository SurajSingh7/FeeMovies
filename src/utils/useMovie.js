import { useState,useEffect} from "react";
import { moviesList } from "./constants";


const useMovie=(resId)=>{
  
    
    const [movie, setMovie] = useState(null); 

    useEffect(() => {
      getMovieInfo(); 
    }, []);
  
    async function getMovieInfo() {
      try {
        // const data = await fetch(swiggy_api_URL);
        // const json = await data.json();
        // updated state variable restaurants with Swiggy API data
       
        // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        // console.log(json?.data?.cards[2]?.data?.data?.cards);
        setMovie(moviesList[resId]);
        // setRestaurant(restaurantList[resId]);
        
        // console.log(restaurantList[resId]);
        // console.log(restaurantList);
        
      } catch (error) {
        console.log(error);
      }
    }


    return movie;
}

export default useMovie;
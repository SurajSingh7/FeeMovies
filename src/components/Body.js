// Body part- 2
import { restaurantList,swiggy_api_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import Shimmer from "./Shimmer";


const Body=()=>{

       
        const [searchText,setSearchText]=useState();
        const[page,setPage]=useState(1);
        const ItemInOnePage=20;

        const [errorMessage, setErrorMessage] = useState("");
      
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
            // console.log(json?.data?.cards[2]?.data?.data?.cards);
            
            setAllRestaurants(restaurantList);
            setFilteredRestaurants(restaurantList);
            
            console.log(restaurantList);
            
          } catch (error) {
            console.log(error);
          }
        }


          // use searchData function and set condition if data is empty show error message
        const searchData = (searchText, restaurants) => {
             if (searchText !== "") {
                const data = filterData(searchText, restaurants);
                setFilteredRestaurants(data);
                 setErrorMessage("");
                 if (data.length === 0) {
                 setErrorMessage(
                `Sorry, we couldn't find any results for "${searchText}"`
                   );
                 } 
                }
                 else {
                setErrorMessage("");
                setFilteredRestaurants(restaurants);
               }
             };

     
       
    return (allRestaurants.length==0)?<Shimmer/>: (
       
       <>
        <div className="search-container p-6 h-8 bg-pink-50  items-center flex justify-center ">
        
            <input type="text" className="search-input w-[500] h-8 flex " placeholder="  Search" 
             value={searchText} onChange={(e)=>{ 
              setSearchText(e.target.value); 
              searchData(e.target.value, allRestaurants);
              }} />

            <button className="search-btn p-1  bg-gray-500 hover:bg-pink-400 text-black  " onClick={()=>{  
              searchData(searchText, allRestaurants);

            }}>  Search</button>

        </div>

      
        {(errorMessage!="")?<div className="error-container">{errorMessage}</div>:""}

        <div className="flex flex-wrap items-center justify-center">
            
              
               {
                filteredRestaurants.slice(ItemInOnePage*(page-1),page*ItemInOnePage).map((restaurant) =>{
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
                      {(page<=1)?setPage(Math.ceil(filteredRestaurants.length/ItemInOnePage)):setPage(page-1)}
                 }}>
                 Prev</button>

                <div className="bg-white p-1 pl-3 pr-4"> <h1>  {page} of {Math.ceil(filteredRestaurants.length/ItemInOnePage)}  </h1> </div>

                 <button className="search-btn p-1  bg-gray-500 hover:bg-pink-400 text-black rounded-sm " onClick={()=>{  
                   {(page>=Math.ceil(filteredRestaurants.length/ItemInOnePage))?setPage(1):setPage(page+1)}
                 }}>
                 Next</button>
     
                 </div>
              }
           
            
        
        </div>

       


        </>
    );
};

export default Body;
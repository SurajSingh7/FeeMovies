// Body part- 2
import { restaurantList } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }


const Body=()=>{

        const [restaurants,setrestaurants]=useState(restaurantList);
        //  let searchTxt ="hi";
        const [searchText,setSearchText]=useState();


    return (
       
       <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Seakrch" 
             value={searchText} onChange={(e)=>{ setSearchText(e.target.value); }} />

            <button className="search-btn" onClick={()=>{  
              // need to filter the data 
              const data =filterData(searchText,restaurants);
              // update the state -restaurants
              setrestaurants(data);
            }}>
            Search</button>
        </div>

        <div className="restaurant-list">
            {
                restaurants.map((restraunt) =>{
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


// const BurgerKing={
//     name:"Burger King",
//     image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/768px-Burger_King_logo_%281999%29.svg.png",
//     cusines:["Burger","American"],
//     rating:"4.2"
// }


// const RestrauntCard=()=>{
//     return (
//         <div className="card">

//             <img src={BurgerKing.image}/>
//             <h2>{BurgerKing.name}</h2>
//             <h3>{BurgerKing.cusines.join(",   ")}</h3>
//             <h4>{BurgerKing.rating} stars </h4>

//         </div>

//     );
// };
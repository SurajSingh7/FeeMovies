// Body part- 2

import { useState } from "react";

const BurgerKing={
    name:"Burger King",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/768px-Burger_King_logo_%281999%29.svg.png",
    cusines:["Burger","American"],
    rating:"4.2"
}



const RestrauntCard=()=>{
    return (
        <div className="card">

            <img src={BurgerKing.image}/>
            <h2>{BurgerKing.name}</h2>
            <h3>{BurgerKing.cusines.join(",   ")}</h3>
            <h4>{BurgerKing.rating} stars </h4>

        </div>

    );
};

const Body=()=>{
        // let searchTxt ="hi";
        let [searchTxt,st]=useState("hik");

    return (
       
        
       <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Seakrch" 
            value={searchTxt} onChange={(e)=>{st(e.target.value) }} />

            <button className="search-btn">Search</button>
        </div>

        <div className="restaurant-list">
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
        </div>

        </>
    );
};

export default Body;
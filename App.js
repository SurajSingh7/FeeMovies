import React  from "react";
import ReactDOM from "react-dom/client";

// Header part-1

const Title =()=>(
    <a href="/">
     <img className="logo" alt="logo" src="https://media-cdn.tripadvisor.com/media/photo-s/1c/58/cd/b8/logo.jpg" />
     </a>
);

const Header=()=>{
    return (

        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// Body part- 2

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
    return (
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
    );
};


const Footer=()=>{
    return (
        <h1>Footer</h1>
    );
};


const AppLayout=()=>{
    return (
         <>
         <Header/>
         <Body/>
         <Footer/>
         </>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render( <AppLayout/>)

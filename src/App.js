import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import RestaurantMenu from "./components/RestaurantMenu";
import  Navigation from "./components/Navigation";
import { M2 } from "./components/MenuMovies";
import { Bollywood,SouthHindiDubbed,MostViewedMovies,EnglishMovies } from "./components/MenuMovies";
import { PopularMovies,HollywoodHindi,ShortMovies } from "./components/MenuMovies";



const AppLayout=()=>{
    return (
         <>
         <Header/>
         <Navigation/>
         <Outlet/>
         <Footer/>
         </>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
                children: [
                    {
                      path: "profile", 
                      element: <Profile />,
                    },
                  ],
            },
            {
                path:"/bollywood",
                element:< Bollywood/>
            },
            {
                path:"/southHindiDubbed",
                element:< SouthHindiDubbed/>
            },
            {
                path:"/mostViewedMovies",
                element:< MostViewedMovies/>
            },
            {
                path:"/englishMovies",
                element:< EnglishMovies/>
            },
            {
                path:"/popularMovies",
                element:< PopularMovies/>
            },
            {
                path:"/hollywoodHindi",
                element:< HollywoodHindi/>
            },
            {
                path:"/shortMovies",
                element:< ShortMovies/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ]   
    }
    

])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

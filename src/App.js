import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import  Navigation from "./components/Navigation";
import { BollywoodMovies,SouthHindiDubbed, OldIsGoldMovies} from "./components/TypeMovies";
import { PopularMovies,HollywoodHindi,WebSeries } from "./components/TypeMovies";
import MovieMenu from "./components/MovieMenu";



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
                path:"/bollywoodMovies",
                element:< BollywoodMovies/>
            },
            {
                path:"/southHindiDubbed",
                element:< SouthHindiDubbed/>
            },
            {
                path:"/oldIsGoldMovies",
                element:< OldIsGoldMovies/>
            },
            {
                path:"/webSeries",
                element:<WebSeries/>
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
                path:"/movie/:resId",
                element:<MovieMenu/>
            }
        ]   
    }
    

])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

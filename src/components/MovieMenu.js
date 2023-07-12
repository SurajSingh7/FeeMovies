import {useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useState } from "react";
import useStreamLink from "../utils/useStreamLink";
import { driveApiPart } from "../utils/secrets";
import { moviesList } from "../utils/constants";


const MovieMenu = () => {
    const { resId } = useParams(); 
   
    const movie=moviesList[resId];
    const[watchFlag,setWatchFlag]=useState(true);
  
  // id,name,image,url,movieType,
    const url=movie?.url;
    var link1="";
    var link2="";

     if(url?.substring(8,11)=="you"){

         const urlInfo=useStreamLink(url);
         link1=urlInfo?.formats[2]?.url;
         link2=link1;

     } else {
        link2=url;
        var link1Arr=url?.split("/");
        var driveId = link1Arr?.sort( function (a, b) { return b.length - a.length; })[0];
        link1="https://www.googleapis.com/drive/v3/files/"+driveId+driveApiPart;
     }

    
  
    return !movie ? ( <Shimmer />) : (
            
      <>
     <div className="bg-pink-100">
       
      
          <div className="">
                  <center>  <h2 className="font-bold ">{movie?.name}</h2> </center>
          </div>


          <div className=" h-12 justify-center  text-center flex items-center " >

                  <button onClick={() =>setWatchFlag(true) }>
                     <h1 className="bg-blue-600 h-3/4 mr-5 p-1.5 font-extrabold rounded-sm ">Watch Server-1 </h1> 
                  </button>

                 { (link1==link2)?
                     <h1></h1>
                    :
                    <button onClick={() =>setWatchFlag(false) }>
                    <h1 className="bg-blue-600 h-3/4 mr-5 p-1.5 font-extrabold rounded-sm" >Watch Server-2</h1>
                    </button>
                 }
                 
           </div>
           
           {
            (watchFlag==true )?
               <div className=" h-[370] justify-center text-center flex items-start shadow-2xl" >
               <video controls= "controls" id="player" tabindex="0"  muted poster="thumb_2.png" autoplay="autoplay" loop="loop" width="48%" src={link1} > </video>
               </div> 
             :(
                (link1!=link2 && link2==url)?
                    <div className=" h-[370]  justify-center text-center flex items-start shadow-2xl relative bg-green-700 " >
                      <div  className=" w-[48%] h-[340] bg-red-400 flex relative">

                       <iframe  src={link2} allow="autoplay"  allowFullScreen="true" width="100%" height="340" ></iframe>
                       <div className="w-[48] h-[48] flex justify-center items-center text-center absolute right-1 top-1 opacity-0 "></div>
                      </div>
                    </div> 
                 :
                 <div className=" h-[370] justify-center text-center flex items-start shadow-2xl" >
                 <video controls= "controls" id="player" tabindex="0" poster="thumb_2.png" autoplay="autoplay" loop="loop" width="48%" src="" > </video>
                 </div> 
              )
           }
      </div>
      </>

    )
  };
  
  export default MovieMenu;


  









    

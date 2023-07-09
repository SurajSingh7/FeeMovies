import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL,ITEM_IMG_CDN_URL} from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import { useState } from "react";


const RestaurantMenu = () => {
    const { resId } = useParams(); 
    const restaurant=useRestaurant(resId);
             //  src="https://www.googleapis.com/drive/v3/files/1R8DXm8VNBDM26H_kymEGD7SpjDhTAnfP?alt=media&key=AIzaSyDeB-WrnaOPmc69XlS8jQMdHNG6w5l9rSU"
              //  src="https://www.googleapis.com/drive/v3/files/1QzEln_kFf6aAq5s5QeGEbwxiSm-cjVbR?alt=media&key=AIzaSyDeB-WrnaOPmc69XlS8jQMdHNG6w5l9rSU"
              //  src="https://www.googleapis.com/drive/v3/files/1RFb1riNTaq_sjv2E268gqQYqDk_1Nib6?alt=media&key=AIzaSyDeB-WrnaOPmc69XlS8jQMdHNG6w5l9rSU"
    // const link1="https://www.googleapis.com/drive/v3/files/1QzEln_kFf6aAq5s5QeGEbwxiSm-cjVbR?alt=media&key=AIzaSyDeB-WrnaOPmc69XlS8jQMdHNG6w5l9rSU"
    const link1="https://dr.sf-converter.com/download?id=cefb5cc48724a76b6e7520d0820823c7f6539bad503e480f52573833cce2f657&payload=1*eJzVlNlu4zYUhl%2FFCBCiBSpH%2BxJAGDBeEsubvMhxcmPQIi3TWi1qsT3ou5dSZivQmyl60QGMj4tFHp7%2FkP%2FnO5aWuU%2B8PLp7vDsWRcYeHx7quu5e07Io96Trp%2FFDjQr%2F%2BKmytWe4eIvScrNnd398WTnCP70QlZimf4%2BY55IgCCwRjtrZCBOCu0GaBhGpKCZpu1XbyyJ03SM%2F%2FEQuGc2JLemmaSm6pZiAUJsy%2Bfw%2BWud9XI7jCXTrXBeu0Ac0syXT7Mqq1DXlrqIDiu1UgJPLy%2BJU9Bd4RvFLtSTekuK%2BqeAYGSzN1pPlMbrN08Iq5zdACxTYkiqCj6TtL0mCnJxLfhDGIvtKGIiP9qYEcWwr0r3ck3UQJ%2FYPSfE5PlIDjeAEGyBmNir5XJrkIK7smIPaEsgiW1YBTWjh1wneZ8xWRdPQeOzMt71IXp2v8nCyZP2Z%2BtrP6DbBV2TqYwWKRn90Gc4NNzIcBEGV5RXfjlVZ6fM2pjGxW%2Bnv5WGcqSBh9qy8Jac0dXqVFKxTt3izbvX0ms5BQPM2IT8iia2IpqpaGsBlbkuW2NVUGURxwdXXZC6%2FoWq6bEiKAto5XhFJNU0RHCouvAxCQjIU0Yq0Gx545Xh6omjIqg72hGLGh4omipIBfPt18AQK%2FoWqKXyWn9EeTbCVuJOVc7UOVsA1QDniwn1cAC4eoRw0a9Do2xSqkbktE%2B98L1Azm%2FmcjS7NoNGFt40uvEkYB0%2Bbs0maNzxdTp4oiL5GjY%2FNgrhB80XcrImrFs0xsibID4XjC2lgw2elt7vAerkYHeEYu7EaxYd4EI9H13wnzMSpKyg3oXfC66Bgq7VQO05vf%2FCXkMJ9QgK63LEdnMooHL5hS%2FdfNaUS8BIPBpetg%2BEED%2BpkVNT3Sp%2F%2FQBtwfhYXjtkEDGb76eywrwfvuBiOyjyQ3LVxs9x652kuzNebMxyi7dksdgbsjRZ9JQ%2B2lnCqlmNc55ODtfXESJCJO47q9ERrul1o%2B%2BV4ZUrO4iMgf87ty%2FwVnzNfipoe412FV05S1JZaS72l0VAXm9esyi2VlmpLo6XZ0GioWGpLraXe0mj58a%2F1q%2FtHW7af9Q9LtkRVNL75h8rN4at%2FWKKiKJJk6Kou%2Fbf%2Bof0r%2F%2Fi4EP9XBwm4g8yJ4QR%2BGC8WL%2F1Q98zB7sx65QvZjIc3z3%2BZMeeckI0X%2BqUL6QCG2tv03dnDmWlpgfd2umITHUpnPjvimbYJJucl1FeX6S0Ziv%2FgHzzcLZp5b7HeY7BOl7I6HDm7Sr1lwWWxLr3NJDmkeHWew2i2gfRJohiapZeHZXA8OdrqfTo%2BOrv34fWMQgxrY4xO3jW8bSsGv%2FlHQYuIcPN4Lrn2eWdFwyNGnd%2FmhwP1KYo6m%2BbO%2Fd4ROg5ijHaeaRS1A5RQ3j513ByhkPdgXtEE553xEdEc8Qm3TE5oTzurNAlYRxYlk0f7KDyDxd3jd7v58y%2F%2F1uZ9*1688924341*a9051638764feb70"
    const link2="https://video5.videa.hu/static/720p/5.1254495.2050518.1.13.1.1?md5=2QOtCX4SlObHEYvwlrS2vQ&expires=1688921660"
    const[watchFlag,setWatchFlag]=useState(false);
    
    const[isShow,setIsShow]=useState("opacity-0");
  
    return !restaurant ? ( <Shimmer />) : (
            
      <>
      
     <div className="bg-pink-100">
       
      
        
          <div className="">
                  <center>  <h2 className="font-bold ">{restaurant?.data?.name}</h2> </center>
          </div>


          <div className=" h-12 justify-center  text-center flex items-center " >

                  <button onClick={() =>setWatchFlag(true) }>
                     <h1 className="bg-blue-600 h-3/4 mr-5 p-1.5 font-extrabold rounded-sm ">Watch Server-1</h1> 
                  </button>

                  <button onClick={() =>setWatchFlag(false) }>
                    <h1 className="bg-blue-600 h-3/4 mr-5 p-1.5 font-extrabold rounded-sm" >Watch Server-2</h1>
                 </button>

                
           </div>
           
           {(watchFlag==true)? 
               <div className=" h-[370] justify-center text-center flex items-start shadow-2xl" >
               <video controls= "controls" id="player" tabindex="0" muted="true" poster="thumb_2.png" autoplay="autoplay" loop="loop" width="48%" src={link1} > </video>
               </div>
             : 
              //  <div className=" h-[370] justify-center text-center flex items-start shadow-2xl" >

              //  {/* <video controls= "controls" id="player" tabindex="0" muted="true" poster="thumb_2.png" autoplay="autoplay" loop="loop" width="48%" src={link2} ></video> */}
              


              //  <div className=" h-[370]  justify-center text-center flex items-start shadow-2xl relative bg-green-700 " >
              //      <div  className=" w-[48%] h-[340] bg-red-400 flex relative">

              //            <iframe  src="https://drive.google.com/file/d/1R8DXm8VNBDM26H_kymEGD7SpjDhTAnfP/preview" allow="autoplay"  allowFullScreen="true" width="100%" height="340" ></iframe>
              //            <div className="w-[48] h-[48] flex justify-center items-center text-center absolute right-1 top-1 bg-transparent hover:bg-red-500 "></div>
              //      </div>
              //  </div>

                 <div className=" h-[370]  justify-center text-center flex items-start shadow-2xl relative bg-green-700 " >
                   <div  className=" w-[48%] h-[340]  bg-red-700  flex relative">

                   <iframe width="100%" height="340" src="https://www.youtube.com/embed/JgQn8BhDOBs" frameborder="0" allow="autoplay;" allowfullscreen ="true"></iframe>

                       <div className="w-[100%] h-[17%] flex justify-center items-center text-center absolute right-0 top-0  bg-blue-500 hover:bg-black" >
                       {/* <div className="w-[100%] h-[17%] flex justify-center items-center text-center absolute right-0 top-0 bg-transparent hover:bg-black ">hh</div> */}
                        
                      </div>

                         
                   </div>
               </div>



                        








           }


      </div>
    
      
      </>
      
    )
  };
  
  export default RestaurantMenu;


  









    

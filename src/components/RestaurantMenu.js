import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL,ITEM_IMG_CDN_URL} from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";


const RestaurantMenu = () => {
    const { resId } = useParams(); 
    console.log("render count");
    const restaurant=useRestaurant(resId);
  
    return !restaurant ? ( <Shimmer />) : (
            
      // <div  style="width: 640px; height: 480px; position: relative;">

      <iframe src="https://drive.google.com/file/d/1R8DXm8VNBDM26H_kymEGD7SpjDhTAnfP/preview"   
             width="640" height="200" frameborder="0" scrolling="no" seamless="" allowfullscreen="true" >  
      </iframe>

          // {/* <div style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 0px; top: 0px;">&nbsp;</div>
      //  </div> */}
       
      
    )
  };
  
  export default RestaurantMenu;


  









    

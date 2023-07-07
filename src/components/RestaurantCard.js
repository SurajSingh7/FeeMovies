import { IMG_CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card w-[210] h-[470] p-1 m-5 shadow-lg bg-pink-50 justify-center text-center items-center">
       
      <img className="h-2.5/3 w-full items-center"  src={cloudinaryImageId} />
      <h5 className="font-extrabold bg-green-400 ">{"Download/Watch"}</h5>
      <h2 className="font-bold m-1">{name}</h2>
     

    </div>
  );
};

export default RestaurantCard;
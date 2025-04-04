import React, { useState } from 'react'; 
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";





const RestaurantMenu = ()=> {
  
    const {resId} = useParams();
   const[showIndex , setShowIndex] = useState(0);


    const resInfo = useRestaurantMenu(resId);
        if(resInfo === null) return <Shimmer/>
         const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
         const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
        const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( c => c.card?.card?.['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
 

    return(
        <div className="text-center">
            <h1 className="font-extrabold my-10 text-2xl ">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>
            {/* Categories Accordions */}
           {categories.map((category,index)=><RestaurantCategory 
           key={category?.card?.card?.title} 
           data = {category?.card?.card}
           showItems = {index == showIndex ? true : false}
           setShowIndex={() => setShowIndex(index)}
           />)}
           </div>
    );
};
export default RestaurantMenu
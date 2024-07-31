import { useEffect,useState } from "react";
import { useParams } from "react-router";
import { useRestaurantData } from "../utils/menuData";

const Menu = () => {
  const {resId} = useParams();
  const restaurantMenu = useRestaurantData(resId);
 return<div>
        {restaurantMenu?.map((menu)=> <li>
        {menu.card?.card?.text}
        
       </li>)}   
  </div>
};

export default Menu;

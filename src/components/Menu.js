import { useEffect,useState } from "react";
import { useParams } from "react-router";

const Menu = () => {
  const {resId} = useParams();
  const[restaurantMenu, setRestaurantMenu] = useState();
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

 const fetchRestaurantMenu = async ()=> {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.34260&lng=85.30990&restaurantId=${resId}+&catalog_qa=undefined&submitAction=ENTER`
      );
  
   const json =  await data.json();
   setRestaurantMenu(json?.data?.cards);
  }
  console.log("rest",restaurantMenu);
 return<div>
        {restaurantMenu?.map((menu)=> <li>
        {menu.card?.card?.text}
       </li>)}   
  </div>
};

export default Menu;

import { useEffect,useState } from "react";

const Menu = () => {
  const[restaurantMenu, setRestaurantMenu] = useState();
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

 const fetchRestaurantMenu = async ()=> {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.34260&lng=85.30990&restaurantId=874678&catalog_qa=undefined&submitAction=ENTER"
      );
  
   const json =  await data.json();
   setRestaurantMenu(json?.data?.cards);
  }
  return <div>
        <li>
        {restaurantMenu?.[0]?.card?.card?.text}
       </li>   
  </div>;
};

export default Menu;

import { useState, useEffect } from "react";

export const useRestaurantData = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState();
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  const fetchRestaurantMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.34260&lng=85.30990&restaurantId=${resId}+&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    setRestaurantMenu(json?.data?.cards);
  };
  return restaurantMenu;
};

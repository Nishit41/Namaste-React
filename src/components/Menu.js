import { useEffect, useState } from "react";
import { useRestaurantData } from "../utils/menuData";
import { useParams } from "react-router";
import { RestMenuInfo } from "./RestMenuInfo";
import { Accordion } from "./Accordion";

const Menu = () => {
  const { resId } = useParams();
  const arr = useRestaurantData(resId);
  const cardsArr = arr?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  return (
    <div className="w-2/4 m-auto my-10">
      {arr?.map((rest) => (
        <>
          <div className="font-medium text-3xl mb-4">{rest?.card?.card?.info?.name}</div>
          {rest?.card?.card?.info?.avgRating && (
          <RestMenuInfo rest={rest}/>
          )}
        </>
      ))}
      <Accordion cards={cardsArr}/>
    </div>
  );
};

export default Menu;

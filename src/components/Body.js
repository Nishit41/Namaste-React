import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [filteredRestaurantsList, setFilteredRestaurantList] =
    useState(restaurants);

    console.log({filteredRestaurantsList});

  return (
    <>
      <button
        onClick={() => {
          const filteredList = filteredRestaurantsList.filter(
            (restaurant) => restaurant.info.avgRating > 4.1
          );
          setFilteredRestaurantList(filteredList);
        }}
      >
        Filter
      </button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {filteredRestaurantsList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info?.id}
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5dff22bc484599ce6f02501c73eb0f16"
            }
            resName={restaurant.info?.name}
            cuisines={restaurant.info?.cuisines}
            NoOfStar={restaurant.info?.avgRating}
            timeTaken={restaurant.info?.sla?.slaString}
          />
        ))}
      </div>
    </>
  );
};

export default Body;

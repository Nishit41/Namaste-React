import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [filteredRestaurantsList, setFilteredRestaurantList] = useState([]);
  const [searchedRestaurantList, setSearchedRestaurantList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState(filteredRestaurantsList);
  const fetchData = async () => {
    const data = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.34260&lng=85.30990&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )}`
    );

    const json = await data.json();
    setFilteredRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setIsLoading(false);
    setSearchedRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  function handleSearch() {
    const filteredRestaurant = filteredRestaurantsList.filter((restaurant) =>
      restaurant?.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchedRestaurantList(filteredRestaurant);
  }

  return isLoading ? 
  <h1>isLoading..</h1> : // TODO: Replace it with simmer 
  (
    <>
      <div style={{ display: "flex", gap: "4px", paddingBottom: "8px" }}>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button onClick={() => handleSearch()}>Search</button>
        <button
          onClick={() => {
            const filteredList = filteredRestaurantsList.filter(
              (restaurant) => restaurant.info.avgRating > 4.1
            );
            setFilteredRestaurantList(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {searchedRestaurantList.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info?.id}`}
            key={restaurant.info?.id}
          >
            <RestaurantCard
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`}
              resName={restaurant.info?.name}
              cuisines={restaurant.info?.cuisines}
              NoOfStar={restaurant.info?.avgRating}
              timeTaken={restaurant.info?.sla?.slaString}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;

import RestaurantCard, { componentWithLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../utils/userContext";
import { imgUrl } from "../utils/constant";

const Body = () => {
  const [filteredRestaurantsList, setFilteredRestaurantList] = useState([]);
  const [searchedRestaurantList, setSearchedRestaurantList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedInUser, setUserName } = useContext(userContext);
  useEffect(() => {
    fetchData();
  }, []);
  const LabelledComponent = componentWithLabel(RestaurantCard);
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
      restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setSearchedRestaurantList(filteredRestaurant);
  }

  return isLoading ? (
    <h1>isLoading..</h1> // TODO: Replace it with simmer
  ) : (
    <>
      <div className="my-2">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="outline-2"
        ></input>
        <button
          className="bg-blue-800 text-white p-2 px-3 rounded-md border-none"
          onClick={() => handleSearch()}
        >
          Search
        </button>
        <button
          className="mx-2 p-2 bg-blue-800 text-white rounded-md"
          onClick={() => {
            const filteredList = filteredRestaurantsList.filter(
              (restaurant) => restaurant.info.avgRating > 4.1
            );
            setFilteredRestaurantList(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
        <input className="w-54 border-[2px] px-2 py-1" onChange={(e)=>setUserName(e?.target?.value)}>
        </input> 
      </div>
      <div className="flex justify-between flex-wrap p-4 gap-2">
        {searchedRestaurantList?.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info?.id}`}
            key={restaurant.info?.id}
          >
            {restaurant.info?.availability?.opened ? (
              <LabelledComponent
                src={`${imgUrl}${restaurant?.info?.cloudinaryImageId}`}
                resName={restaurant.info?.name}
                cuisines={restaurant.info?.cuisines}
                NoOfStar={restaurant.info?.avgRating}
                timeTaken={restaurant.info?.sla?.slaString}
              />
            ) : (
              <RestaurantCard
                src={`${imgUrl}${restaurant?.info?.cloudinaryImageId}`}
                resName={restaurant.info?.name}
                cuisines={restaurant.info?.cuisines}
                NoOfStar={restaurant.info?.avgRating}
                timeTaken={restaurant.info?.sla?.slaString}
              />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;

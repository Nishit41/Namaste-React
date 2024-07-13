import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const Body = () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <RestaurantCard
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5dff22bc484599ce6f02501c73eb0f16"
        }
        resName={restaurants[0].info?.name}
        cuisines={restaurants[0].info?.cuisines}
        NoOfStar={restaurants[0].info?.avgRating}
        timeTaken={restaurants[0].info?.sla?.slaString}
      />
  
      {restaurants.map((restaurant) => (
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
  );

  export default Body;
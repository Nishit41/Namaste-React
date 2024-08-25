import { useContext } from "react";
import { userContext } from "../utils/userContext";

const RestaurantCard = ({ resName, cuisines, NoOfStar, timeTaken, src }) => {
  const { loggedInUser } = useContext(userContext);
  return (
    <div className="flex flex-col w-52 shadow-md p-4">
      <img className="rest-card" alt="res-logo" src={src} />
      <div className="flex flex-col">
        <h1 className="font-medium">{resName}</h1>
        <h3>
          {NoOfStar}, {timeTaken}
        </h3>
        <h3 className="break-words">{cuisines}</h3>
      </div>
      {loggedInUser}
    </div>
  );
};

export default RestaurantCard;

export const componentWithLabel = (RestaurantCard) => {
  return (props) => (
    <>
      <label className="absolute my-4 bg-black text-white px-2 rounded-md">
        Open
      </label>
      <RestaurantCard {...props} />
    </>
  );
};

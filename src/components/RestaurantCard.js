const RestaurantCard = ({ resName, cuisines, NoOfStar, timeTaken, src }) => {
    return (
      <div
        className="flex flex-col w-52 shadow-xl p-4"
      >
        <img className="rest-card" alt="res-logo" src={src} />
        <div className="flex flex-col" >
          <h1 className="font-medium">{resName}</h1>
          <h3>
            {NoOfStar}, {timeTaken}
          </h3>
          <h3 className="break-words">{cuisines}</h3>
        </div>
      </div>
    );
  };

  export default RestaurantCard;
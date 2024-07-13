const RestaurantCard = ({ resName, cuisines, NoOfStar, timeTaken, src }) => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "200px" }}
      >
        <img className="rest-card" alt="res-logo" src={src} />
        <div style={{ flexDirection: "column" }}>
          <h1 style={{ color: "black", fontWeight: "bold" }}>{resName}</h1>
          <h3>
            {NoOfStar}, {timeTaken}
          </h3>
          <h3>{cuisines}</h3>
        </div>
      </div>
    );
  };

  export default RestaurantCard;
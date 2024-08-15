export const RestMenuInfo = ({ rest }) => {
  const {
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    feeDetails,
  } = rest?.card?.card?.info;
  return (
    <>
      {rest?.card?.card?.info?.avgRating && (
        <div className="shadow-md w-full p-3 rounded-lg">
          <div>
            <span className=" bg-green-400 text-white px-2">*</span>
            <span className="px-2">{avgRating}</span>
            <span>{totalRatingsString}</span> .{" "}
            <span className="text-end">{costForTwoMessage}</span>
            <div className="text-red-500 font-medium">{cuisines.join(",")}</div>
            <div className="">
              <span className="font-medium">Outlet</span>: {locality}
            </div>
          </div>
          <hr />
          <div className="font-thin">{feeDetails?.message}</div>
        </div>
      )}
    </>
  );
};

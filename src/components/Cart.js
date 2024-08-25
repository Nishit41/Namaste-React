import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

export const Cart = () => {
  const addedItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();
  return (
    <div className="w-7/12 m-auto">
      <button
        className="mb-4 text-gray-100 bg-black p-2 mt-2 mx-auto w-32"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      {addedItems?.map((card) => {
        return (
          <div className="font-normal mt-8 shadow-sm" key={card?.name}>
            <div className="flex justify-between">
              <div className="p-4 font-medium">{card?.name}</div>
              {card?.description && (
                <div className="p-4 font-light">{card?.description}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

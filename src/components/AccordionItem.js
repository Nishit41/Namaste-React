import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { imgUrl } from "../utils/constant";

const AccordionItem = ({ title, itemCards }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        className="flex justify-between shadow-md p-2 mt-4"
        onClick={toggleExpansion}
      >
        <span className="font-medium">{title}</span>
        {isExpanded ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      {isExpanded && (
        <div>
          {itemCards.map((card) => {
            const { name, description, imageId } = card?.card?.info;
            return (
              <div className="font-normal mt-8 shadow-sm flex-col" key={name}>
                <div className="p-4 font-medium">{name}</div>
                <div className="flex">
                  {description && (
                    <div className="p-4 font-light w-[70%] ">{description}</div>
                  )}

                  <div className="w-52">
                    <img className="h-40" src={`${imgUrl}${imageId}`} />
                    <button
                      className="bg-black text-white rounded-md px-4 m-auto max-h-8"
                      onClick={() => dispatch(addItem(card?.card?.info))}
                    >
                      Add+
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;

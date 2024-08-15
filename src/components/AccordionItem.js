import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const AccordionItem = ({ title, itemCards }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
            const { name, description } = card?.card?.info;
            return (
              <div className="font-normal mt-8 shadow-sm" key={name}>
                <div className="p-4 font-medium">{name}</div>
                {description && (
                  <div className="p-4 font-light">{description}</div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;

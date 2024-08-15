import AccordionItem from "./AccordionItem";

export const Accordion = ({ cards }) => {
  const filteredList = cards?.filter(
    (card) =>
      card?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <>
      {filteredList?.map((card) => {
        const { title, itemCards } = card?.card?.card;
        return (
          <AccordionItem key={title} title={title} itemCards={itemCards} />
        );
      })}
    </>
  );
};

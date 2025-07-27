import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import DishCard from "./DishCard";

function Accordian({ index, title, items, show, setShowIndex }) {
  console.log(show);
  return (
    <div>
      <button
        className="w-full font-bold border-1 border-stone-200 rounded-lg shadow-md
        py-2 px-6 flex justify-between items-center mb-2"
        onClick={() => {
          setShowIndex(show ? null : index);
        }}
      >
        <span>
          {title} ({items.length})
        </span>
        <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} />
      </button>

      {show && (
        <div className="p-4">
          {items.map((category) => {
            return (
              <DishCard key={category.card.info.id} data={category.card.info} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Accordian;

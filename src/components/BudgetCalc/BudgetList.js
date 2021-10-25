import BudgetItem from "./BudgetItem";
import { MdDelete } from "react-icons/md";
import "./budget.scss";

const BudgetList = ({ items, type, handleDelete, clearItems }) => {
  return (
    <div className="budget__list">
      <h2> {type}</h2>
      <ul>
        {items.map((item) => {
          return (
            <BudgetItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              type={type}
            />
          );
        })}
      </ul>
      {items.length > 0 && (
        <button
          type="button"
          className="delete-icon"
          onClick={() => clearItems(type)}
        >
          Clear {type}
          <MdDelete />
        </button>
      )}
    </div>
  );
};

export default BudgetList;

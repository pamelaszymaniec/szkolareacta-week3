import { MdDelete } from "react-icons/md";
import "./budget.scss";

const BudgetItem = ({ item, handleDelete, type }) => {
  const { title, amount, category, id} = item;
  return (
    <li className="budget__item">
      <div className="title">
        <strong>{title}</strong>
        <small>{category}</small>
      </div>
      <div>
        <span className={amount > 0 ? "plus" : "minus"}>${amount}</span>
        <button
          type="button"
          aria-label="delete button"
          className="delete-icon"
          onClick={() => handleDelete(id, type)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default BudgetItem;

import { MdSend } from "react-icons/md";
import "./budget.scss";

const categories = [
  {
    id: 1,
    name: "Salary",
  },
  {
    id: 2,
    name: "Crypto",
  },
  {
    id: 3,
    name: "Passive income",
  },
  {
    id: 4,
    name: "Education",
  },
  {
    id: 5,
    name: "Food",
  },
  {
    id: 6,
    name: "Other",
  },
];

const BudgetForm = ({
  type,
  title,
  amount,
  category,
  handleType,
  handleTitle,
  handleAmount,
  handleCategory,
  handleSubmit,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group form__group--column">
        <div className="form__radio-group">
          <input
            type="radio"
            className="form__radio-input"
            id="expense"
            name="type"
            value="expense"
            checked={type === "expense"}
            onChange={handleType}
          />
          <label htmlFor="expense" className="form__radio-label">
            Expense
          </label>
        </div>

        <div className="form__radio-group">
          <input
            type="radio"
            className="form__radio-input"
            id="income"
            name="type"
            value="income"
            checked={type === "income"}
            onChange={handleType}
          />
          <label htmlFor="income" className="form__radio-label">
            Income
          </label>
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="title" className="form__label">
          Title
        </label>
        <input
          type="text"
          className="form__input"
          placeholder="e.g. rent"
          id="title"
          name="title"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="form__group">
        <label htmlFor="amount" className="form__label">
          Amount
        </label>
        <input
          type="number"
          className="form__input"
          placeholder="e.g. 1000"
          id="amount"
          name="amount"
          value={amount}
          onChange={handleAmount}
        />
      </div>
      <div className="form__group">
        <label htmlFor="category" className="form__label">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={category}
          className="form__input"
          onChange={handleCategory}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form__group">
        <button type="submit" className="button button-reset">
          Submit <MdSend />
        </button>
      </div>
    </form>
  );
};

export default BudgetForm;

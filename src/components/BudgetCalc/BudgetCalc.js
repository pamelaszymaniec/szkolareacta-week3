import BudgetForm from "./BudgetForm";
import BudgetList from "./BudgetList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./budget.scss";

const dummyExpenses = [
  { id: uuidv4(), title: "Rent", amount: -1600, category: "Salary" },
  { id: uuidv4(), title: "Car payment", amount: -2600, category: "Other" },
  { id: uuidv4(), title: "Books", amount: -3600, category: "Education" },
];

const dummyIncomes = [
  {
    id: uuidv4(),
    title: "Invest in bitcoin",
    amount: 36600,
    category: "Crypto",
  },
  { id: uuidv4(), title: "Salary", amount: 2600, category: "Salary" },
];

const initialIncomes = localStorage.getItem("incomes")
  ? JSON.parse(localStorage.getItem("incomes"))
  : dummyIncomes;

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : dummyExpenses;

const BudgetCalc = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [incomes, setIncomes] = useState(initialIncomes);
  const [type, setType] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  //useEffect
  useEffect(() => {
    console.log("we called useEffect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [expenses, incomes]);

  const resetInputs = () => {
    setType("");
    setTitle("");
    setAmount("");
    setCategory("");
  };

  const handleType = (e) => {
    console.log(`Type: ${e.target.value}`);
    setType(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDelete = (id, type) => {
    if (type === "Expenses") {
      let tempExpensesTable = expenses.filter((item) => item.id !== id);
      setExpenses(tempExpensesTable);
      // setExpenses([...expenses.filter((item) => item.id !== id)])
    } else {
      let tempIncomesTable = incomes.filter((item) => item.id !== id);
      setIncomes(tempIncomesTable);
      // setIncomes([...incomes.filter((item) => item.id !== id)])
    }
  };

  const clearItems = (type) => {
    if (type === "Expenses") {
      setExpenses([]);
    } else {
      setIncomes([]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(type);
    console.log(category);
    if (title !== "" && amount !== "" && type !== "" && category !== "") {
      if (type === "expense") {
        setExpenses([
          ...expenses,
          { id: uuidv4(), title, amount: -amount, category },
        ]);
        resetInputs();
      } else {
        setIncomes([...incomes, { id: uuidv4(), title, amount, category }]);
        resetInputs();
      }
    }
  };

  function totalBudget() {
    //merge 2 arrays
    const allTypes = [...expenses, ...incomes];
    return allTypes.reduce((acc, curr) => {
      return (acc += parseInt(curr.amount));
    }, 0);
  }

  return (
    <>
      <h1>Budget Calculator</h1>
      <div>
        <BudgetForm
          type={type}
          amount={amount}
          title={title}
          handleAmount={handleAmount}
          handleType={handleType}
          handleTitle={handleTitle}
          handleCategory={handleCategory}
          handleSubmit={handleSubmit}
        />
        <hr />
      </div>
      <div className="budget">
        <BudgetList
          type="Expenses"
          items={expenses}
          handleDelete={handleDelete}
          clearItems={clearItems}
        />
        <BudgetList
          type="Incomes"
          items={incomes}
          handleDelete={handleDelete}
          clearItems={clearItems}
        />
      </div>
      <hr />
      <div className="total">
        Total:
        <strong className={totalBudget() > 0 ? "plus" : "minus"}>
          ${totalBudget()}
        </strong>
      </div>
    </>
  );
};

export default BudgetCalc;

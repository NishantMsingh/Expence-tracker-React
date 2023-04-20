import "./App.css";
import Expense from "./Expense";
import NewExpense from "./Component/NewExpense/NewExpense";
import { useState } from "react";
const initialExpenses = [
  {
    id: "E1",
    date: new Date(2021, 3, 28),
    title: "Car Insurance",
    amount : 200.56,
  },
  {
    id: "E2",
    date: new Date(2023, 3, 28),
    title: "Flight Tickets",
    amount: 6000.56,
  },
  {
    id: "E3",
    date: new Date(2023, 3, 28),
    title: "Festival",
    amount: 1200.56,
  },
  {
    id: "E4",
    date: new Date(2020, 3, 28),
    title: "Party Night",
    amount: 30.56,
  },
];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="d-flex flex-column w-100">
      <h1 className="display-6">Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;

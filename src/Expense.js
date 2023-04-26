import CardWrapper from "./Component/CardWrapper";
import ExpenseFilter from "./Component/ExpenseFilter";
import ExpenseLists from "./Component/NewExpense/ExpenseLists";
import React, {useState} from "react";
import NewExpenseChart from "./Component/NewExpense/NewEpenseChart";
function Expense(props) {
  const [selectedYear, setSelectedYear] = useState("ALL");

  const selectYearHandler = (event) => {
    setSelectedYear(event.target.value);
  };

const expenseFiltered= props.items.filter((expense) => {
  if (selectedYear === "ALL") {
    return true;
  } else {
    return expense.date.getFullYear().toString() === selectedYear;
  }
})
  return (
    <CardWrapper className="App">
      <NewExpenseChart items={expenseFiltered}></NewExpenseChart>
      <ExpenseFilter onSelectYear={selectYearHandler}/>
      <ExpenseLists items={expenseFiltered}></ExpenseLists>
    </CardWrapper>
  );
}

export default Expense;

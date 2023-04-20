import CardWrapper from "./Component/CardWrapper";
import ExpenseFilter from "./Component/ExpenseFilter";
import ExpenseItem from "./Component/ExpenseItem";
import React, {useState} from "react";
function Expense(props) {
  const [selectedYear, setSelectedYear] = useState("ALL");

  const selectYearHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <CardWrapper className="App">
      <ExpenseFilter onSelectYear={selectYearHandler}/>
      {props.items.filter((expense) => {
  if (selectedYear === "ALL") {
    return true;
  } else {
    return expense.date.getFullYear().toString() === selectedYear;
  }
}).map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              price={expense.amount}
            />
          );
        })}
    </CardWrapper>
  );
}

export default Expense;

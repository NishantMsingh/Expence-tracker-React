import React from "react";
import ExpenseItem from "../ExpenseItem";
const ExpenseLists=props=>{
    if(props.items.length===0)
    {
      return <p className="text-light display-4">Expense not Found</p>
    }
    else if(props.items.length===1)
    {
        return(
            props.items.map((expense) => {
             return <ul>
                 <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                price={expense.amount}
              />
              <p>Only One Expense</p>
             </ul>
            }));
    }
  return(
       props.items.map((expense) => {
        return <ul>
            <ExpenseItem
           key={expense.id}
           title={expense.title}
           date={expense.date}
           price={expense.amount}
         />
        </ul>
       }));
}


export default ExpenseLists;
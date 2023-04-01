import React from "react";
import Expenseform from "./Expenseform";
function Newexpense(props)
{ 
  const savedExpenseHandler=(enteredExpenseData)=>{
   const expenseData= {
     ...enteredExpenseData,
     id:Math.random().toString()
   };
props.onAddExpense(expenseData);
  };
    return(
   <div className="new-expense">
     <Expenseform onSaveExpenseData={savedExpenseHandler}></Expenseform>
   </div>
    )

}
export default Newexpense;
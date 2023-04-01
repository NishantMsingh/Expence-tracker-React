
import "./Expense.css";
import Expensedate from "./Expensedate";
import ExpenseDetails from "./ExpenseDetails";
import React,{useState} from "react";
const Expenseitem=(props)=>{ 

  const [price,setPrice]=useState(props.price);

  function clickhandler(){
    setPrice("$100");
    console.log("Clicked");
  }
    return (
            <div className="Expense-item">
        <Expensedate date={props.date}></Expensedate>
        <ExpenseDetails price={price} title={props.title}></ExpenseDetails>
        <button className="btn" onClick={clickhandler}>Change Price</button>
        </div>
    );
}

export default Expenseitem; 
import "./Expense.css";
import Expensedate from "./Expensedate";
import ExpenseDetails from "./ExpenseDetails";
function Expenseitem(props)
{ 
    return (
        <div className="bgs">
            <div className="Expense-item">
        <Expensedate date={props.date}></Expensedate>
        <ExpenseDetails price={props.price} title={props.title}></ExpenseDetails>
        </div>
        </div>
    );
}

export default Expenseitem; 
import "./Expense.css";
import Expensedate from "./Expensedate";
import ExpenseDetails from "./ExpenseDetails";
const Expenseitem=(props)=>{ 

    // function clickhandler()
    // {}
    const clickhandler=()=>{
        console.log("Har Har Mahadev");
    }
    return (
        <div className="bgs">
            <div className="Expense-item">
        <Expensedate date={props.date}></Expensedate>
        <ExpenseDetails price={props.price} title={props.title}></ExpenseDetails>
        <button className="btn" onClick={()=>clickhandler}>Click title</button>
        </div>
        </div>
    );
}

export default Expenseitem; 
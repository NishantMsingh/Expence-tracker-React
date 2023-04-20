import "./newexpense.css"
import Expenseform from "./Expenseform";
const Newexpense=(props)=>{

    const saveExpennseHandler=(enteredExpenseData)=>{

        const expensedataa={
            ...enteredExpenseData,
            id:Math.random()*10,
        };
        console.log(expensedataa.amount);
        props.onAddExpense(expensedataa);
    };

    return(
        <div className="form">
            <Expenseform onSaveExpenseData={saveExpennseHandler}></Expenseform>
        </div>
    );

}

export default Newexpense;
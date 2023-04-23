import "./newexpense.css"
import Expenseform from "./Expenseform";
import { useState } from "react";
const Newexpense=(props)=>{

       const [isEditing,setIsEditing]=useState(false);

    const saveExpennseHandler=(enteredExpenseData)=>{

        const expensedataa={
            ...enteredExpenseData,
            id:Math.random()*10,
        };
        props.onAddExpense(expensedataa);
        setIsEditing(false);
    };

    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHandler=()=>{
        setIsEditing(false);
    }
    return(
        <div className="form">
        {!isEditing &&
        <button className="editbtn" onClick={startEditingHandler}>Add new expense</button>
}
            {isEditing && <Expenseform onSaveExpenseData={saveExpennseHandler} onCancel={stopEditingHandler}></Expenseform>}
        </div>
    );

}

export default Newexpense;
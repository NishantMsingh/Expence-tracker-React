import { useState } from "react";
import "./expenseform.css";
const Expenseform = (props) => {
  const [enteredtitle, setTitle] = useState("");
  const [enteredamount, setAmount] = useState("");
  const [entereddate, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const submitHandler=(e)=>{
    e.preventDefault();

    const expensedata={
      amount:enteredamount,
      title:enteredtitle,
     date:new Date(entereddate)
    };

    props.onSaveExpenseData(expensedata);
    setAmount("");
    setTitle("");
    setDate("");
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-cantrol">
        <label htmlFor="title"> Title</label>
        <input type="text" value={enteredtitle} name="title" id="" onChange={titleChangeHandler} required/>
      </div>
      <div className="input-cantrol">
        <label htmlFor="price"> Amount</label>
        <input type="number" value={enteredamount} name="price" onChange={amountChangeHandler} required/>
      </div>
      <div className="input-cantrol">
        <label htmlFor="date"> Date </label>
        <input
          type="date"
          name="date"
          min="2018-01-01"
          max="2024-12-22"
          value={entereddate}
          onChange={dateChangeHandler}
          required
        />
      </div>
      <div className="subbtn">
         <button type="button" onClick={props.onCancel} className="cancelbtn">Cancel</button>
        <input className="cancelbtn" type="submit" value="Add new Expense" />
      </div>
    </form>
  );
};
export default Expenseform;

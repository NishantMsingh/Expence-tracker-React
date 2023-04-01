import { useState } from "react";
import "./Expenseformcss.css";
function Expenseform(props) {
  const [enteredtitle, setenteredTitle] = useState("");
  const [enteredamount, setenteredamount] = useState("");
  const [entereddate, setenteredDate] = useState("");

  const titlechangeHandler = (e) => {
    setenteredTitle(e.target.value);
  };
  const amountchangeHandler = (e) => {
    setenteredamount(e.target.value);
  };

  const datechangeHandler = (e) => {
    setenteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expensedata = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };
  props.onSaveExpenseData(expensedata);
    setenteredTitle("");
    setenteredamount("");
    setenteredDate("");
  };

  //  function display()
  //  {
  //   console.log(document.getElementById("texttitle").value);
  //   console.log(document.getElementById("textdate").value);
  //   console.log(document.getElementById("textprice").value);
  //  }
  return (
    <form onSubmit={submitHandler}>
      <div className="expfrm">
        <div>
          <label htmlFor="texttite">Title</label>
          <input
            type="text"
            value={enteredtitle}
            name=""
            id="texttitle"
            onChange={titlechangeHandler}
          />
        </div>
        <div>
          <label htmlFor="textdate">Price</label>
          <input
            type="text"
            value={enteredamount}
            name=""
            id="textprice"
            onChange={amountchangeHandler}
    
          />
        </div>
        <div>
          <label htmlFor="textprice">Date</label>
          <input
            type="date"
            className="myDateInput"
            name=""
            id="textdate"
            onChange={datechangeHandler}
            value={entereddate}
          />
        </div>
        <input className="button" type="submit" value="Add Expense" />
      </div>
    </form>
  );
}
export default Expenseform;

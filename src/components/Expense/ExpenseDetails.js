import "./Expense.css";

function ExpenseDetails(props)
{
    const expensetitle=props.title;
    const expenseamount=props.price;
return(
  <div className="fla">
    <h1>{expensetitle}</h1>

<div className="fla price">
<h6>₹{expenseamount}</h6>
</div>
  </div>
);
}
export default ExpenseDetails;
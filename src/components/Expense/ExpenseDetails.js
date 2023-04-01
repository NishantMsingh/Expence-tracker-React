import "./Expense.css";

function ExpenseDetails(props)
{
    const expensetitle=props.title;
    const expenseamount=props.price;
return(
  <div className="expitem">
    <h3>{expensetitle}</h3>
    <h3 className="price">{expenseamount}</h3>
  </div>
);
}
export default ExpenseDetails;
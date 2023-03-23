import "./Expense.css"
function Expenseitem(props)
{ 
    const expensedate=props.date.toISOString();
    const expensetitle=props.title;
    const expenseamount=props.price;
    const LocationOfExpenditure=props.placeexpendeture;
    return (
        <div className="Expense-item">
            <div>{expensedate}</div>
            <div className="expense_item-discription">
                <h1>{expensetitle}</h1>
            </div>
            <div className="price">{expenseamount}</div>
            <div className="place">{LocationOfExpenditure}</div>
        </div>
    );
}

export default Expenseitem; 
import "./Expensedatecss.css"
const Expensedate=(props)=>{
    const month=props.date.toLocaleString("en-us", { month:"long"});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString("en-us", {day:"2-digit"});
   
  return(
    <div className="date">
    <div>{month}</div>
    <div className="year">{year}</div>
    <div>{day}</div>
  </div>
  );
}



export default Expensedate;

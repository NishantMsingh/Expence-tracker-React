import Expenseitem from "./components/Expense/Expenceitem";
import Card from "./components/UIs/Card";
import Newexpense from "./components/NewExpense/Newexpense";

import "./App.css";
import { useState } from "react";
function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: new Date(),
      title: "Car Insurance",
      price: 1000,
      placeexpendeture: "Insurance policy",
    },
    {
      id: 2,
      date: new Date(),
      title: "Movies",
      price: 3000,
      placeexpendeture: "Life style",
    }, 
    {
      id: 3,
      date: new Date(),
      title: "Study",
      price: 3000,
      placeexpendeture: "Life style"
    },
    {
      id: 23,
      date: new Date(),
      title: "Drive",
      price: 2000,
      placeexpendeture: "My style"
    }
  ]);
  


const addexpenseHandler=expensedata=>{
  setExpenses((prevExpenses) => [expensedata, ...prevExpenses]);
}

  return (
    <div>
    <h1>Expense Tracker</h1>
    <Newexpense onAddExpense={addexpenseHandler}/>
    <Card className="App">

{expenses.map((expense) => (
        <Expenseitem
          date={expense.date}
          title={expense.title}
          price={expense.price}
          placeexpendeture={expense.placeexpendeture}
        />
      ))}
      
     
    </Card>
    </div>
  );
}

export default App;

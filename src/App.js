import Expenseitem from "./components/Expense/Expenceitem";
import Card from "./components/UIs/Card";
// import Movies from "./components/Movies";
// import Food from "./components/Food"
// import Petrol from "./components/Petrol"
import "./App.css";
function App() {
  let expenses = [
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
      id: 23,
      date: new Date(),
      title: "Study",
      price: 3000,
      placeexpendeture: "Life style",
    },
  ];

  return (
    <div>
    <h1>React 1st</h1>
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

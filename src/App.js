import Expenseitem from "./components/Expenceitem";
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
      placeexpendeture: "LIC",
    },
    {
      id: 2,
      date: new Date(),
      title: "Term Inuracne",
      price: 3000,
      placeexpendeture: "LIC",
    },
  ];

  return (
    <div className="App">

{expenses.map((expense) => (
        <Expenseitem
          date={expense.date}
          title={expense.title}
          price={expense.price}
          placeexpendeture={expense.placeexpendeture}
        />
      ))}
     
    </div>
  );
}

export default App;

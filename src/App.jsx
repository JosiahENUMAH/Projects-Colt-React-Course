import Chicken from "./Chicken";
import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
import ShoppingList from "./ShoppingList/ShoppingList";
import { data } from "./ShoppingList/data";
import Property from "./Property/Property";
import Clicker from "./Events/Clicker";
import Form from "./Events/Form";
import ClickerExercise from "./Events/ClickerExercise";

function App() {
  return (
    <>
      <ClickerExercise message="Fuck Off" buttonText="Please Click Me!" />
      {/* <Form /> */}
      {/* <Clicker /> */}
      {/* <ShoppingList items={data} />
      <Property /> */}
      {/* <Greeter person="Mike" from="Jaush" />
      <Greeter person="Kroos" from="Al Hilal" />
      <Greeter person="Lukaku" from="Al Ittihad" /> */}
      {/* <Die numSides={1} />
      <Die numSides={2} />
      <Die numSides={3} />
      <Die /> */}
      {/* <DoubleDice color="pink" />
      <DoubleDice text="Yo yo yo" color="grey" />
      <DoubleDice foods={["rice", "beans", "fish", "garri"]} /> */}
    </>
  );
}

export default App;

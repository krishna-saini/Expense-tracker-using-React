import Expenses from "./component/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./component/NewExpense/NewExpense";
const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 5, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];
// function App() {
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const AddExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    //OR
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    // using syntactival sugar for fragments for wrapper element
    <>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;

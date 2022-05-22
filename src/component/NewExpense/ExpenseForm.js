import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // // single state slices
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // multi-state slice approach-- by passing argument of usestate
  // const [userInput, setUserInput] = useState({
  //   setTitle: "",
  //   setAmount: "",
  //   setDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
    //in case of multiple events --
    // setUserInput((prevState) => {
    //   return { ...prevState, setTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, setAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, setDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    // console.log(event.target);
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //to make it number type
      date: new Date(enteredDate),
    };

    // const expenseData = {
    //   title: userInput.setTitle,
    //   amount: userInput.setAmount,
    //   date: new Date(userInput.setDate),
    // };

    props.onSaveExpenseData(expenseData);

    // console.log(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

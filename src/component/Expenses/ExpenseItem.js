import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";
import React from "react";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.expense.date} />
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">Rs. {props.expense.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;

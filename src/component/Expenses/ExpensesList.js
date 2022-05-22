import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">No Expense Found</h2>;
  }
  return (
    <ul className="expense-list">
      {props.items.map((item) => (
        <ExpenseItem key={item.id} expense={item} />
      ))}
    </ul>
  );
};

export default ExpensesList;

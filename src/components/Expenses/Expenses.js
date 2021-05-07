import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import Card from "./../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const yearChangedHandler = (year) => {
    setFilterYear(year);
    console.log("[Expenses.js] yearChangedHandler: " + year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onYearChanged={yearChangedHandler} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
};

export default Expenses;

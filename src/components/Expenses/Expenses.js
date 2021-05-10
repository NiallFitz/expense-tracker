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
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onYearChanged={yearChangedHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import Card from "./../UI/Card";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
	const [filterYear, setFilterYear] = useState("2020");

	const yearChangedHandler = (year) => {
		setFilterYear(year);
	};

	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filterYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={filterYear}
					onYearChanged={yearChangedHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;

import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const expensesValues = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString(),
        }    
      props.addExpense(expenseData);
    }
    return ( <div className="new-expense">
       <ExpenseForm expensevalues={expensesValues}/>
    </div>)
}
export default NewExpense;
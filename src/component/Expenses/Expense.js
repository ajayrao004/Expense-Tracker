import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from '../UI/Card.js';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'
import { useState } from 'react';
const Expense = (props) => {
   const [filteredDate,setFilteredDate] = useState('2019');
    const expenseFilterHandler = (selectedDate) => {
        setFilteredDate(selectedDate);
    }
    return (
        <div>
        <Card className='expenses'>
        <ExpensesFilter selected= {filteredDate} expenseFilterData={expenseFilterHandler}/>
       <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
       <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
       <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
       </Card>
       </div>
    );
}

export default Expense;
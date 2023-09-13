import React,{useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
 const [expensedate,setDateValue]= useState('2022');
 const onDateChangeSelect = (event) =>
 {
  setDateValue(event.target.value);
  const daterange = {
    dates : expensedate
  }
  props.expenseFilterData(daterange);

 }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select select={onDateChangeSelect}>
          <option value={expensedate}>2022</option>
          <option value={expensedate}>2021</option>
          <option value={expensedate}>2020</option>
          <option value={expensedate}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
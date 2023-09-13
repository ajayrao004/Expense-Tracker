import Expense from './component/Expenses/Expense.js';
import NewExpense from './component/NewExpense/NewExpense.js';
const App = () => {
  const expense = [
    {
      id : 'e1',
      title : 'Toilet Paper',
      amount : 45.12,
      date : new Date(2020,7,14),
    },
    {
      id : 'e2',
      title : 'Car Insurance',
      amount : 160,
      date : new Date(2021,8,26),
    },
    {
      id : 'e3',
      title : 'Health Insurance',
      amount : 320.27,
      date : new Date(2022,12,4),
    }
  ];
  const addExpenseHandler = (addExpenseData) => {
    console.log(addExpenseData);
  }
  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}/>
      <Expense items={expense}/>
    </div>
  );
}

export default App;

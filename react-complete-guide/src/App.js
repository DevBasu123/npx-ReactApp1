import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from 'react';


const DUMMY_EXPENSES = [
  {id: 'e1', title: 'Car Insurance', amount: 200, date: new Date(2021, 5, 24)},
  {id: 'e2', title: 'College Expenses', amount: 150, date: new Date(2021, 6, 30)},
  {id: 'e3', title: 'Fooding', amount: 500, date: new Date(2019, 1, 14)},
  {id: 'e4', title: 'New Desk', amount: 80, date: new Date(2022, 3, 15)},
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses( prevExpenses => {
      return [expense, ...prevExpenses];
    } );
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

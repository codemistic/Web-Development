import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [Form,updateForm]=useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    updateForm(false);
  };
  function clickHandler(){
    updateForm((preValue)=>{
      return !preValue;
    })
  }
  function cancelClick(){
    updateForm(false);
  }



  return (
    <div className='new-expense'>

      {!Form?<button type="submit" onClick={clickHandler} >Add Expense</button>:null}
  
      {Form?<ExpenseForm cancelClick={cancelClick} onSaveExpenseData={saveExpenseDataHandler} />:null}

    </div>
  );
};

export default NewExpense
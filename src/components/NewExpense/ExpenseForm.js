import React,{useState}  from "react";
import "./ExpenseForm.css";

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    // });
  
    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredTitle: event.target.value,
      // });
      // setUserInput((prevState) => {
      //   return { ...prevState, enteredTitle: event.target.value };
      // });
    };
  
    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredAmount: event.target.value,
      // });
    };
  
    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredDate: event.target.value,
      // });
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
      
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
      };
      props.onSaveExpenseData(expenseData);
      // console.log(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    };



    return (
      // <div>
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__controls">
            <label>Title</label>
            <input name="title" onChange={titleChangeHandler} type="text" value={enteredTitle}/>
        </div>
        <div className="new-expense__controls">
            <label>Amount</label>
            <input name="amount" onChange={amountChangeHandler} type="number" min="0.01" step="0.01" value={enteredAmount}/>
        </div>
        <div className="new-expense__controls">
            <label>Date</label>
            <input name="date" onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31" value={enteredDate}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.cancelClick}>Cancel</button>


    </div>


    </form>

 
    )
}
export default ExpenseForm;
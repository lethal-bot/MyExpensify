import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userData, setUserData] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });


    const titleChangeHandler = (event) => {
        setUserData({
            ...userData,
            enteredTitle: event.target.value,
        })
    };

    const amountChangeHandler = (event) => {
        setUserData({
            ...userData,
            enteredAmount: event.target.value,
        })
    };

    const dateChangeHandler = (event) => {

        setUserData({
            ...userData,
            enteredDate: event.target.value,

        })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userData);

        props.onSaveExpenseData(userData);

        setUserData({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    };




    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={userData.enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userData.enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={userData.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
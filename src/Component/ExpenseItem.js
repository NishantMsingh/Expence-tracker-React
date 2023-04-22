import './ExpenseItem.css';
import React, { useState } from 'react';
import Expensedate from './Expensedate';
const ExpenseItem = (props) => {

  const [title,setTitle]=useState(props.title);
const clickHandler=()=>{
    setTitle("ABCDEF");
    setTimeout(()=>{
      console.log(title);
    },5000);
}

  return (
    <li>
      <div className='expense-item'>
      <Expensedate date={props.date}></Expensedate>
      <div className='expense-item-discription'>
        <div><h2>{title}</h2></div>
        <div className='expense-item-price h5 mt-2'>${props.price}</div>
        <button className='rounded border-0 p-1' onClick={clickHandler}>Change title</button>
      </div>
    </div>
    </li>
  );
};

export default ExpenseItem;

import React from "react";
import MyButton from "../button/MyButton";
import './mySort.scss';


const MySort = ({ options, value, onChange }) => {
  console.log(onChange);
  return (
    <div className="sort container">
      {options.map(option =>
        <MyButton value={value} onChange={evt => onChange(evt.target.value)} key={option.value} value={option.value}>{option.name}</MyButton>
      )}
    </div>
  )
}

export default MySort;
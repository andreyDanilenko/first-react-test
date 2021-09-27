import React from "react";
import MyButton from "../button/MyButton";
import './myFilter.scss';


const MyFilter = ({ options, onChange }) => {
  return (
    <div className="filter">
      {options.map(option =>
        <MyButton onClick={() => onChange(option.value)} key={option.value} value={option.value}>{option.name}</MyButton>
      )}
    </div>
  )
}

export default MyFilter;
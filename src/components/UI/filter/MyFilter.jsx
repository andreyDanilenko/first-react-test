import React from "react";
import MyButton from "../button/MyButton";
import './myFilter.scss';

const MyFilter = ({ options, onChange, onMore, selectedFilter }) => {
  return (
    <div className="filter">
      {options.map(option =>
        <MyButton
          typeStyle={'filter'}
          onClick={() => onChange(option.value)}
          key={option.value}
          active={(option.value === selectedFilter).toString()}
          value={option.value}>{option.name}
        </MyButton>
      )}
      {onMore.renderOptions ? <MyButton typeStyle={'filter'} onClick={() => onMore.onMoreOptions()} >...</MyButton> : ''}
    </div>
  )
}

export default MyFilter;
import React from 'react';
import switchButton from './mySwitchButton.module.scss'

const MySwitchButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={switchButton.switchBtn} ></button>
  );
};

export default MySwitchButton;
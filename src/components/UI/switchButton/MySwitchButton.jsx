import React from 'react';
import './mySwitchButton.scss'


const MySwitchButton = ({ ...props }) => {
  return (
    <button {...props} className='switch-btn' ></button>
  );
};

export default MySwitchButton;
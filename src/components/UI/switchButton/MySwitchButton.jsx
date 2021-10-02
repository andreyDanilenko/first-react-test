import React from 'react';
import switchButton from './mySwitchButton.module.scss'

const MySwitchButton = ({ onClick, typeStyle }) => {
  let className = switchButton.switchBtn;

  switch (typeStyle) {
    case 'use':
      className = switchButton.switchBtn + ' ' + switchButton.switchOnBtn
      break;
  }

  console.log(typeStyle);
  return (
    <button onClick={onClick} className={className} ></button>
  );
};

export default MySwitchButton;
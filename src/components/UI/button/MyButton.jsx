import React from 'react';
import classButton from './MyButton.module.scss'

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classButton.myButton}>
      {children}
    </button>
  );
};

export default MyButton;
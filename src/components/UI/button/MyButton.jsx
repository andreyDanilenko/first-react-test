import React from 'react';
import classButton from './MyButton.module.scss'

const MyButton = ({ children, onClick, typeStyle }) => {
  let className = classButton.myButton;

  switch (typeStyle) {
    case 'more':
      className = classButton.myButton + ' ' + classButton.myButtonMore
      break;
    case 'auth':
      className = classButton.myButton + ' ' + classButton.myButtonAuth
      break;
    case 'filter':
      className = classButton.myButton + ' ' + classButton.myButtonFilter
      break;
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default MyButton;
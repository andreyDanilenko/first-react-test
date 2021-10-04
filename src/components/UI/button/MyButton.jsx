import React from 'react';
import classButton from './MyButton.module.scss'

const MyButton = ({ children, ...props }) => {
  let className = classButton.myButton + ' ';

  switch (props.typeStyle) {
    case 'more':
      className += classButton.myButtonMore;
      break;
    case 'auth':
      className += classButton.myButtonAuth;
      break;
    case 'filter':
      className += classButton.myButtonFilter;
      break;
  }

  if (props.active === 'true') {
    className = className + ' ' + classButton.myButtonFilterActive;
  }

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default MyButton;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function Button({ children, bgColor, color }) {
    const style = {
      background: bgColor,
      color,
      padding: 20,
      border: 'none',
      borderRadius: 3,
      width: '100%'
    };
    return (
      <button style={style}>
        <FontAwesomeIcon icon={faCoffee} /> {children}
      </button>
    );
  }

export default Button;
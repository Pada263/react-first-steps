import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  label: string;
  
  // TODO: additional properties, eg. disabled, variant (style), icon to use, etc.
  iconPlacement?: "start" | "end"; // should default to start
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button 
      className={clsx(
         {[styles.btn]: true}) 
      }
      
    >
      {props.label}
    </button>
  );
};

export default Button;

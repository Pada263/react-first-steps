import React, { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';


interface ButtonProps {
  label: string;
  disabled: boolean;
  icon: any;
  isYellow: boolean;

  // TODO: additional properties, eg. disabled, variant (style), icon to use, etc.
  iconPlacement?: "start" | "end"; // should default to start
}



const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button 
      disabled={props.disabled}
      className={clsx(
         {[styles.btn ]: true , [styles.buttonYellow] : props.isYellow}) 
      } 
    >
      {props.icon}
      {props.label}
    </button>
  );
};

export default Button;

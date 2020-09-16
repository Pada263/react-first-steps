import React, { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';


interface ButtonProps {
  label: String;
  disabled: boolean;
  icon: any;
  isYellow: boolean;
  action: any;
  // TODO: additional properties, eg. disabled, variant (style), icon to use, etc.
  iconPlacement?: "start" | "end"; // should default to start
}



const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button 
      disabled={props.disabled}
      type={props.action}
      className={clsx(
         {[styles.btn ]: true , [styles.btnYellow] : props.isYellow}) 
      } 
    >
      {props.icon}
      {props.label}
    </button>
  );
};

export default Button;

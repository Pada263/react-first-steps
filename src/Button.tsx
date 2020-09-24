import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';


interface ButtonProps {
  label: String;
  disabled: boolean;
  icon?: any;
  isIcon: boolean;
  isYellow: boolean;
  action: any;
  theme: String;
 
  // TODO: additional properties, eg. disabled, variant (style), icon to use, etc.
  iconPlacement?: "start" | "end"; // should default to start
}



const Button: React.FC<ButtonProps> = (props) => {

  return (
    <button 
      
      disabled={props.disabled}
      type={props.action}
      className={clsx( [props.theme],
         {  [styles.btn ]: true , [styles.btnYellow] : props.isYellow, [styles.icon] : props.isIcon, } ) 
      } 
    > 
      {props.icon?props.icon: null}
      {props.label}
    </button>
  );
};

export default Button;

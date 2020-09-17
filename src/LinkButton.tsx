import React from 'react';
import clsx from 'clsx';
import styles from './LinkButton.module.scss';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  label: String;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <button
      className={clsx(
        "todo bootstrap classes",
        styles.btn
      )}
    > 
      <Link to="" 
        className={clsx(
          styles.btn__link
         )} 
      > 
        {props.label}
      </Link>
     
    </button>
  );
};

export default LinkButton;

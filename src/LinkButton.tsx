import React from 'react';
import clsx from 'clsx';
import styles from './LinkButton.module.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

interface LinkButtonProps {
  label: String;
}


const LinkButton: React.FC<LinkButtonProps> = (props) => {
  
  return (
    <button type="button"  className={clsx(styles.btn, "btn btn-link")}>
     <a href="#">
      {props.label}
      </a>
    </button>
  );
};


export default LinkButton;

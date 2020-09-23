import React from 'react';
import clsx from 'clsx';
import styles from './LinkButton.module.scss';

interface LinkButtonProps {
  label: String;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {

function handleButtonClick(){}
function handleLinkClick(e: { preventDefault: () => void; }) {}

  return (
    <button type="submit"  className={clsx(styles.btn, "btn btn-icon")}
        >
     <a href="#" onClick={handleLinkClick}>
      {props.label}
      </a>
    </button>
  );
};


export default LinkButton;

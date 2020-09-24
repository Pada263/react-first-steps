import React from 'react';
import clsx from 'clsx';
import styles from './LinkButton.module.scss';

interface LinkButtonProps {
  label: String;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {


function handleLinkClick(e: { preventDefault: () => void; }) {}

  return (
    
     <a href="#" onClick={handleLinkClick}>
      {props.label}
      </a>
    
  );
};


export default LinkButton;

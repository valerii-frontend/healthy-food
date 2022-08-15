import React from 'react';
import styles from './Button.module.css'


const Button = (props) => {

    let btnStyles;
    if(props.transparent) {
        btnStyles = `${styles.button} ${styles.button_o}`
    } else if(props.count) {
        btnStyles = `${styles.button} ${styles.button_quantity}`

    } else {
        btnStyles = styles.button;
    }

    return (
        <button {...props} className={btnStyles}>
            {props.children}
        </button>
    );
};

export default Button;
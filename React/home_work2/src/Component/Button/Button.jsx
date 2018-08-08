import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({type, text}) => {
        return (
            <Button type={type} className={styles.btn}>{text}</Button>
        )
};

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
};

Button.defaultProps = {
    type: null,
};

export default Button;

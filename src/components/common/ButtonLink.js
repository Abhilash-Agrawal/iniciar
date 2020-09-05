import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonLink.module.css';

const ButtonLink = ({ buttonClick, value }) => (
  // <div className={styles.button}>
  <button type="button" className={styles.button} onClick={() => buttonClick(value)}>
    {value}
  </button>
  // </div>
);

ButtonLink.propTypes = {
  buttonClick: PropTypes.func,
  value: PropTypes.string,
};
export default ButtonLink;

import React from 'react';
import propTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ type, text }) => {
  return <button type={type} className={s.btn}>{text}</button>;
};

Button.propTypes = {
  type: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Button;

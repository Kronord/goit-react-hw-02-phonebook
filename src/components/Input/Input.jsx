import React from 'react';
import propTypes from 'prop-types';
import s from './Input.module.css'

const Input = ({ type, id, name, value, onChange, pattern, title }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      pattern={pattern}
      title={title}
      className={s.input}
      required
    />
  );
};

Input.propTypes = {
  type: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  pattern: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Input;

import React from 'react';
import propTypes from 'prop-types';
import s from './Label.module.css'

const Label = ({ logId, title }) => {
  return <label htmlFor={logId} className={s.label}>{title}</label>;
};

Label.propTypes = {
  logId: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Label;

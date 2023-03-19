import React from 'react';
import { PropTypes } from 'prop-types';
import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.button}>
      <button onClick={onLeaveFeedback}>{options}</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.string,
};

import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={options}>{onLeaveFeedback}</button>
    </div>
  );
};

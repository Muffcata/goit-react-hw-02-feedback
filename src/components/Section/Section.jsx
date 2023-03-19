import React from 'react';
import { PropTypes } from 'prop-types';
import style from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={style.section}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

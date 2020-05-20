import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.css';

const box = (props) => {
  return <div className={props.skinny ? styles.skinnyBox : styles.box}>{props.children}</div>;
};

box.propTypes = {
  skinny: PropTypes.string,
};

export default box;

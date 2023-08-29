import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ onGood, onNeutral, onBad, onTotal, onPositive }) => {
  return (
    <>
      <p className={css.p}>
        good: <span>{onGood}</span>
      </p>
      <p className={css.p}>
        neutral: <span>{onNeutral}</span>
      </p>
      <p className={css.p}>
        bad: <span>{onBad}</span>
      </p>
      <p className={css.p}>
        total: <span>{onTotal}</span>
      </p>
      <p className={css.p}>
        positive feedback:{' '}
        <span>
          <b>{onPositive}%</b>
        </span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  onTotal: PropTypes.number.isRequired,
  onPositive: PropTypes.number.isRequired,
};

export default Statistics;

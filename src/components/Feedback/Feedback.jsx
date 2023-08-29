import React from 'react';
import css from './Feedback.module.css';
import PropTypes, { string } from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <section className={css.feedback}>
      {options.map(option => {
        return (
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </section>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;

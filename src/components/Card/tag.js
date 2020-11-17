import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ text }) => (
  <>
    <input type="button" value={text} className="card__tag--button" />
  </>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;

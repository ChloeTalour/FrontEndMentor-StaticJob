import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ text, setTagElt, oneTag }) => {
  const essai = (evt) => {
    const isItInside = oneTag.includes(evt.target.value);
    if (!isItInside) {
      setTagElt([...oneTag, evt.target.value]);
    }
  };
  return (
    <>
      <input type="button" value={text} className="card__tag--button" onClick={essai} />
    </>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  setTagElt: PropTypes.func,
  oneTag: PropTypes.array,
};

Tag.defaultProps = {
  setTagElt: () => {},
  oneTag: [],
};

export default Tag;

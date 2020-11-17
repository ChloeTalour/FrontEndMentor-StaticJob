import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({
  text, setTagElt, oneTag, newData, setNewData,
}) => {
  const addTagInSearchBar = (evt) => {
    const isItInside = oneTag.includes(evt.target.value);
    if (!isItInside) {
      setTagElt([...oneTag, evt.target.value]);
      const toto = newData.filter((people) => people.level === 'Junior');
      console.log(toto);
    }
  };
  return (
    <>
      <input type="button" value={text} className="card__tag--button" onClick={addTagInSearchBar} />
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

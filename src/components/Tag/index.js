import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({
  text, setTagElt, oneTag, newData, setNewData, dataName,
}) => {
  const addTagInSearchBar = (evt) => {
    const isItInside = oneTag.includes(evt.target.value);
    const toto = { value: evt.target.value, name: dataName };
    console.log(toto);
    if (!isItInside) {
      setTagElt([...oneTag, toto]);
      const indexValue = evt.target.dataset.name;
      const valueWanted = evt.target.value;
      if (indexValue === 'role' || indexValue === 'level') {
        setNewData(newData.filter((people) => people[indexValue] === valueWanted));
      }
      if (indexValue === 'languages' || indexValue === 'tools') {
        setNewData(newData.filter((people) => people[indexValue].includes(valueWanted)));
      }
    }
  };
  return (
    <>
      <input type="button" value={text} data-name={dataName} className="card__tag--button" onClick={addTagInSearchBar} />
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

import React from 'react';
import PropTypes from 'prop-types';
import Remove from '../../assets/images/icon-remove.svg';
import './styles.scss';

const Arrow = ({
  text, setTagElt, tagElt, dataFromJobs, setNewData,
}) => {
  const essai = (evt) => {
    const parentElt = evt.currentTarget.parentNode;
    const inputElt = parentElt.querySelector('input').value;
    setTagElt(tagElt.filter((elt) => elt.value !== inputElt));
    console.log(tagElt);
  };
  return (
    <div className="arrow">
      <input type="button" value={text} className="card__tag--button search-bar-tag" />
      <p onClick={essai}>
        <img src={Remove} alt="" />
      </p>
    </div>
  );
};

Arrow.propTypes = {
  text: PropTypes.string.isRequired,
  setTagElt: PropTypes.func,
  tagElt: PropTypes.array,
};

Arrow.defaultProps = {
  setTagElt: () => {},
  tagElt: [],
};

export default Arrow;

import React from 'react';
import PropTypes from 'prop-types';
import Arrow from './arrow';
import './styles.scss';

const SeeTagElement = ({ tagElt, setTagElt }) => {
  const allTag = tagElt.map((elt) => (
    <Arrow text={elt} key={elt} setTagElt={setTagElt} tagElt={tagElt} />
  ));
  return (
    <div className="see-tag-element">
      <div className="see-tag-element__all">
        {allTag}
      </div>
      <p className="see-tag-element__clear" onClick={() => setTagElt([])}>Clear</p>

    </div>
  );
};

SeeTagElement.propTypes = {
  setTagElt: PropTypes.func,
  tagElt: PropTypes.array,
};

SeeTagElement.defaultProps = {
  setTagElt: () => {},
  tagElt: [],
};

export default SeeTagElement;

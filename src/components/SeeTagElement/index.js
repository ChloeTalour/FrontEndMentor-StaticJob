import React from 'react';
import PropTypes from 'prop-types';
import Arrow from './arrow';
import './styles.scss';

const SeeTagElement = ({
  tagElt, setTagElt, dataFromJobs, setNewData,
}) => {
  const allTag = tagElt.map((elt) => (
    <Arrow text={elt.value} setTagElt={setTagElt} tagElt={tagElt} dataFromJobs={dataFromJobs} setNewData={setNewData} />
  ));

  const cleanAllTags = () => {
    setTagElt([]);
    setNewData(dataFromJobs);
  };

  return (
    <div className="see-tag-element">
      <div className="see-tag-element__all">
        {allTag}
      </div>
      <p className="see-tag-element__clear" onClick={cleanAllTags}>Clear</p>

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

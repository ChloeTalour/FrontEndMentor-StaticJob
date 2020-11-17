import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';
import './styles.scss';

const Card = ({
  company,
  img,
  newOrNot,
  featured,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
  setTagElt,
  tagElt,
}) => {
  const languagesSort = languages.sort();
  const allLanguages = languagesSort.map((elt) => (
    <Tag text={elt} setTagElt={setTagElt} oneTag={tagElt} />
  ));

  const toolsSort = tools.sort();

  const allTools = toolsSort.map((elt) => (
    <Tag text={elt} />
  ));

  return (
    <section className={featured ? 'card active' : 'card'}>
      <div className="card__details">
        <img src={img} alt="logoo" className="card__details--logo" />
        <p className="card__details--company">{company}</p>
        {newOrNot && (
          <input type="button" value="New!" className="card__details--new" />
        )}
        {featured && (
          <input type="button" value="Featured" className="card__details--featured" />
        )}

        <h1 className="card__details--position">{position}</h1>
        <ul className="card__details--list">
          <li>{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </ul>
      </div>
      <div className="card__tag">
        <Tag text={role} setTagElt={setTagElt} oneTag={tagElt} />
        <Tag text={level} setTagElt={setTagElt} oneTag={tagElt} />
        {allLanguages}
        {allTools}
      </div>
    </section>
  );
};

Card.propTypes = {
  company: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  newOrNot: PropTypes.bool.isRequired,
  featured: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  setTagElt: PropTypes.func,
  tagElt: PropTypes.array,
};

Card.defaultProps = {
  setTagElt: () => {},
  tagElt: [],
};

export default Card;

// eslint-disable-next-line react/no-array-index-key

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BookCard(props) {
  const {
    title, description, facts, buttonTitle, id,
  } = props;
  return (
    <div className="flex-fill shadow-lg p-3 bg-white rounded card m-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        {facts.map((fact, i) => (<li className="list-group-item" key={i}>{fact}</li>))}
      </ul>
      <div className="card-body">
        <Link className="btn btn-light" to={`/EBClient/Book/${id}`}>{buttonTitle}</Link>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  facts: PropTypes.arrayOf(PropTypes.object),
  buttonTitle: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

BookCard.defaultProps = {
  title: '',
  description: '',
  facts: [],
  buttonTitle: '',
};

export default BookCard;

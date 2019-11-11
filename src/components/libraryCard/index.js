import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LibraryCard(props) {
  const {
    cardHeader, cardDescription, buttonTitle, id,
  } = props;
  return (
    <div className="shadow-lg p-3 bg-white rounded card mb-2">
      <div className="card-body">
        <h5 className="card-title">{cardHeader}</h5>
        <p className="card-text">{cardDescription}</p>
        <Link className="btn btn-light" to={`/EBClient/Library/${id}`}>{buttonTitle}</Link>
      </div>
    </div>
  );
}

LibraryCard.propTypes = {
  cardHeader: PropTypes.string,
  cardDescription: PropTypes.string,
  buttonTitle: PropTypes.string,
  id: PropTypes.string.isRequired,
};

LibraryCard.defaultProps = {
  cardHeader: '',
  cardDescription: '',
  buttonTitle: '',
};

export default LibraryCard;

import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../ratingWidget';

function Comment(props) {
  const { comment, id } = props;
  return (
    <div className="card mt-5">
      <div className="card-body">
        <p className="card-text">{comment}</p>
        <div className="d-flex flex-row flex-wrap justify-content-between align-items-center">
          <p>
            User name
          </p>
          <Rating checked={5} id={id} />
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  id: PropTypes.number,
};

Comment.defaultProps = {
  id: '0',
};

export default Comment;

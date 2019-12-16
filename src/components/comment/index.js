import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../ratingWidget';

function Comment(props) {
  const { comment, id } = props;
  return (
    <div className="card m-2">
      <div className="card-body">
        <p className="card-text">{comment}</p>
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

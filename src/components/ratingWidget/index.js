import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
// To fix this, dynamic index that shit.
function Rating(props) {
  const { checked, id } = props;
  return (
    <div className="row">
      <div className="rating">
        {checked === 5 ? <input type="radio" id={`star5-${id}`} name="rating" value="5" checked /> : <input type="radio" id="star5" name="rating" value="5" />}
        <label htmlFor={`star5-${id}`} title="Meh">5 stars</label>
        <input type="radio" id={`star4-${id}`} name="rating" value="4" />
        <label htmlFor={`star4-${id}`} title="Kinda bad">4 stars</label>
        <input type="radio" id={`star3-${id}`} name="rating" value="3" />
        <label htmlFor={`star3-${id}`} title="Kinda bad">3 stars</label>
        <input type="radio" id={`star2-${id}`} name="rating" value="2" />
        <label htmlFor={`star2-${id}`} title="Sucks big tim">2 stars</label>
        <input type="radio" id={`star1-${id}`} name="rating" value="1" />
        <label htmlFor={`star1-${id}`} title="Sucks big time">1 star</label>
      </div>
    </div>
  );
}

Rating.propTypes = {
};

Rating.defaultProps = {
};

export default Rating;

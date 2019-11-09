import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    labelText, id, children,
  } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      {children}
    </div>
  );
}

Input.propTypes = {
  labelText: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Input.defaultProps = {
  labelText: '',
  id: '',

};

export default Input;

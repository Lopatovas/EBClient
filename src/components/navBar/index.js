/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavBar(props) {
  const { routes } = props;
  return (
    <nav>
      {routes.map((route, i) => (
        <ul className="nav" key={i}>
          <li className="nav-item">
            {route.action ? 'asd' : <Link className="nav-link active" to={route.url}>{route.name}</Link>}
          </li>
        </ul>
      ))}
    </nav>
  );
}

NavBar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

NavBar.defaultProps = {
  routes: [],
};

export default NavBar;

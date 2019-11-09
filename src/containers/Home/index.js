import React from 'react';

import navBarRoutes from '../../config/navRoutes';

import NavBar from '../../components/navBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
  }

  render() {
    return (
      <div>
        <NavBar routes={navBarRoutes.DEFAULT} />
        <div>In home page</div>
      </div>
    );
  }
}

export default Home;

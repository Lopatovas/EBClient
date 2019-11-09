import React from 'react';

import navBarRoutes from '../../config/navRoutes';

import NavBar from '../../components/navBar';
import LibraryCard from '../../components/libraryCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {localStorage.getItem('isUser') ? <NavBar routes={navBarRoutes.SIGNED_IN} /> : <NavBar routes={navBarRoutes.DEFAULT} />}
        <div className="container">
          <LibraryCard
            cardHeader="Amazing library v1.0"
            cardDescription="Best ever"
            buttonTitle="Lego"
            id="1"
          />
          <LibraryCard
            cardHeader="Amazing library v2.0"
            cardDescription="Best ever"
            buttonTitle="Lego"
            id="2"
          />
          <LibraryCard
            cardHeader="Amazing library v3.0"
            cardDescription="Best ever"
            buttonTitle="Lego"
            id="3"
          />
        </div>
      </div>
    );
  }
}

export default Home;

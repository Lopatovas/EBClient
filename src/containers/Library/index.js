import React from 'react';
import navBarRoutes from '../../config/navRoutes';

import NavBar from '../../components/navBar';
import BookCard from '../../components/bookCard';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {localStorage.getItem('isUser') ? <NavBar routes={navBarRoutes.SIGNED_IN} /> : <NavBar routes={navBarRoutes.DEFAULT} />}
        <div className="container d-flex">
          <BookCard
            id="5"
            title="The book of Amazing vol.1"
            description="Yeah, pretty good"
            buttonTitle="Let's check it out!"
          />
          <BookCard
            id="5"
            title="The book of Amazing vol.2"
            description="vol.1 was better..."
            buttonTitle="Let's check it out!"
          />
          <BookCard
            id="5"
            title="The book of Amazing vol.2"
            description="vol.1 was better..."
            buttonTitle="Let's check it out!"
          />
          <BookCard
            id="5"
            title="The book of Amazing vol.2"
            description="vol.1 was better..."
            buttonTitle="Let's check it out!"
          />
          <BookCard
            id="5"
            title="The book of Amazing vol.2"
            description="vol.1 was better..."
            buttonTitle="Let's check it out!"
          />
        </div>
      </div>
    );
  }
}

export default Library;

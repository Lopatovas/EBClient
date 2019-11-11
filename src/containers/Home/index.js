import React from 'react';

import LibraryCard from '../../components/libraryCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    this.setState({ loggedIn: localStorage.getItem('isUser') });
  }

  handleLogOut() {
    localStorage.removeItem('isUser');
    const { history } = this.props;
    history.push('/EBClient/Login');
  }


  render() {
    return (
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
    );
  }
}

export default Home;

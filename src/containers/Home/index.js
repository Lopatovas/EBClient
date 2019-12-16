import React from 'react';

import LibraryCard from '../../components/libraryCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { libraries: [] };
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    this.getLibraries();
    this.setState({ loggedIn: localStorage.getItem('isUser') });
  }

  getLibraries() {
    const params = {
      method: 'GET',
    };
    this.setState({ loading: true });
    fetch('http://127.0.0.1:8000/library/index', params)
      .then((resp) => resp.json())
      .then((parsed) => { this.setState({ libraries: parsed.library }); })
      .catch((e) => console.log(e));
  }

  handleLogOut() {
    localStorage.removeItem('isUser');
    const { history } = this.props;
    history.push('/EBClient/Login');
  }


  render() {
    const { libraries } = this.state;
    return (
      <div className="container">
        {libraries.map((library) => (
          <LibraryCard
            cardHeader={library.name}
            cardDescription={library.description}
            buttonTitle="View Library"
            id={library.id}
            key={library.id}
          />
        ))}
      </div>
    );
  }
}

export default Home;

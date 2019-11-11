/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import { withRouter } from 'react-router-dom';
import navBarRoutes from '../config/navRoutes';

import NavBar from '../components/navBar';

class NavLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    this.setState({ loggedIn: localStorage.getItem('isUser') });
  }

  componentDidUpdate() {
    const { loggedIn } = this.state;
    const storage = localStorage.getItem('isUser');
    if (storage !== loggedIn) {
      this.setState({ loggedIn: storage });
    }
  }

  handleLogOut() {
    localStorage.removeItem('isUser');
    const { history } = this.props;
    history.push('/Login');
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <NavBar routes={new navBarRoutes(this.state.loggedIn).getNavigation(this.handleLogOut)} />
        {children}
      </div>
    );
  }
}

export default withRouter(NavLayout);

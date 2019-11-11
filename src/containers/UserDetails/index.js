import React from 'react';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit() {
    const { history } = this.props;
    history.push(`/EBClient/Message/${'2'}}`);
  }

  render() {
    return (
      <div className="container">
        <button onClick={(e) => { this.handleSubmit(e); }} type="button" className="btn btn-light">
          Send message
        </button>
      </div>
    );
  }
}

export default UserDetails;

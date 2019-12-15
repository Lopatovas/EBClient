import React from 'react';
import CreateLibrary from '../../modals/createLibrary';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, errors: { address: '', password: '', description: '' }, modal: false };
    this.createLibrary = this.createLibrary.bind(this);
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  createLibrary(name, address, description) {
    this.setState({ loading: true });
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },
      body: JSON.stringify({
        name,
        address,
        description,
        status: 'available',
      }),
      method: 'POST',
    };
    fetch('http://127.0.0.1:8000/api/library/create', params)
      .then((resp) => resp.json())
      .then((parsed) => {
        if (parsed.errors) {
          this.setState({ errors: parsed.errors, loading: false });
        } else {
          console.log(parsed);
          this.setState({ loading: false });
          alert('Library created!');
          this.toggle();
        }
      })
      .catch((e) => {
        alert('An unknow error has occured, please try again');
        console.log(e);
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, errors, modal } = this.state;
    const { address, description, name } = errors;
    return (
      <div className="container">
        <div className="shadow-lg p-3 mb-2 bg-white rounded">
          <h2 className="p-2">Administrators panel</h2>
        </div>
        <div className="shadow-lg p-3 mb-2 bg-white rounded">
          <h4 className="p-2 border-bottom">Library panel</h4>
          <button
            type="button"
            className="btn btn-light"
            onClick={this.toggle}
          >
          Create library
          </button>
        </div>
        <div className="container">
          {!loading ? (
            <CreateLibrary
              address={address}
              description={description}
              name={name}
              toggle={this.toggle}
              modal={modal}
              createLibrary={this.createLibrary}
            />
          ) : (
            <div className="spinner-border text-primary" style={{ marginLeft: '50%' }} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Panel;

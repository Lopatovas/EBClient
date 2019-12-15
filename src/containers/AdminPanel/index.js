/* eslint-disable react/sort-comp */
/* eslint-disable no-nested-ternary */
import React from 'react';
import CreateLibrary from '../../modals/createLibrary';
import Table from '../../components/table';
import UserTable from '../../components/userTable';
import WithLoading from '../../HOC/loader';
import EditLibrary from '../../modals/editLibrary';
import ChooseLibrary from '../../modals/chooseLibrary';

const TableWithLoader = WithLoading(Table);
const UserTableWithLoader = WithLoading(UserTable);

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loadingLibraries: false,
      loadingUsers: false,
      errors: { address: '', password: '', description: '' },
      modal: false,
      libraryModal: false,
      libraries: [],
      selectedLibrary: null,
      users: [],
      user: null,
    };
    this.createLibrary = this.createLibrary.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.getLibraries = this.getLibraries.bind(this);
    this.editLibrary = this.editLibrary.bind(this);
    this.deleteLibrary = this.deleteLibrary.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.banUser = this.banUser.bind(this);
  }

  componentDidMount() {
    this.getLibraries();
    this.getUsers();
  }


  getLibraries() {
    const params = {
      method: 'GET',
    };
    this.setState({ loadingLibraries: true });
    fetch('http://127.0.0.1:8000/library/index', params)
      .then((resp) => resp.json())
      .then((parsed) => { this.setState({ libraries: parsed.library, loadingLibraries: false }); })
      .catch((e) => console.log(e));
  }

  toggle() {
    this.setState({ modal: !this.state.modal }, () => {
      if (!this.state.modal) {
        this.setState({ selectedLibrary: null });
      }
    });
  }

  toggleSelect(id) {
    this.setState({ libraryModal: !this.state.libraryModal, user: id }, () => {
      if (!this.state.libraryModal) {
        this.setState({ user: null });
      }
    });
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
          this.setState({ loading: false });
          alert('Library created!');
          this.toggle();
          this.getLibraries();
        }
      })
      .catch((e) => {
        alert('An unknow error has occured, please try again');
        console.log(e);
        this.setState({ loading: false });
      });
  }

  editLibrary(name, address, description) {
    this.setState({ loading: true });
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },
      body: JSON.stringify({
        library_id: this.state.selectedLibrary.id,
        name,
        address,
        description,
        status: 'available',
      }),
      method: 'POST',
    };
    fetch('http://127.0.0.1:8000/api/library/update', params)
      .then((resp) => resp.json())
      .then((parsed) => {
        if (parsed.errors) {
          this.setState({ errors: parsed.errors, loading: false });
        } else {
          this.setState({ loading: false });
          alert('Library updated!');
          this.toggle();
          this.getLibraries();
        }
      })
      .catch((e) => {
        alert('An unknow error has occured, please try again');
        console.log(e);
        this.setState({ loading: false });
      });
  }

  deleteLibrary(id) {
    this.setState({ loading: true });
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },
      body: JSON.stringify({
        library_id: id,
      }),
      method: 'POST',
    };
    fetch('http://127.0.0.1:8000/api/library/delete', params)
      .then((resp) => resp.json())
      .then((parsed) => {
        if (parsed.errors) {
          this.setState({ errors: parsed.errors, loading: false });
        } else {
          this.setState({ loading: false });
          alert('Library removed');
          this.getLibraries();
        }
      })
      .catch((e) => {
        alert('An unknow error has occured, please try again');
        console.log(e);
        this.setState({ loading: false });
      });
  }

  getUsers() {
    const params = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },
    };
    this.setState({ loadingUsers: true });
    fetch('http://127.0.0.1:8000/api/user/index', params)
      .then((resp) => resp.json())
      .then((parsed) => { this.setState({ users: parsed.users, loadingUsers: false }); })
      .catch((e) => console.log(e));
  }

  giveRole(id, libraryId) {
    this.setState({ loading: true });
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },
      body: JSON.stringify({
        user_id: id,
        library_id: libraryId,
      }),
      method: 'POST',
    };
    fetch('http://127.0.0.1:8000/api/giveLibrarianRole', params)
      .then((resp) => resp.json())
      .then((parsed) => {
        if (parsed.errors) {
          this.setState({ errors: parsed.errors, loading: false });
        } else {
          this.setState({ loading: false });
          this.toggleSelect();
          alert('Role updated');
          this.getUsers();
        }
      })
      .catch((e) => {
        alert('An unknow error has occured, please try again');
        console.log(e);
        this.setState({ loading: false });
      });
  }

  banUser(id) {
    this.setState({ loading: true });
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },
      body: JSON.stringify({
        user_id: id,
      }),
      method: 'POST',
    };
    fetch('http://127.0.0.1:8000/api/user/ban', params)
      .then((resp) => resp.json())
      .then((parsed) => {
        if (parsed.errors) {
          this.setState({ errors: parsed.errors, loading: false });
        } else {
          this.setState({ loading: false });
          alert('User banned');
          this.getUsers();
        }
      })
      .catch((e) => {
        alert('An unknow error has occured, please try again');
        console.log(e);
        this.setState({ loading: false });
      });
  }

  render() {
    const {
      loading, errors, modal, libraries, loadingLibraries, selectedLibrary, users, loadingUsers, libraryModal, user,
    } = this.state;
    const { address, description, name } = errors;
    return (
      <div className="container">
        <div className="shadow-lg p-3 mb-2 bg-white rounded">
          <h2 className="p-2">Administrators panel</h2>
        </div>
        <div className="shadow-lg p-3 mb-2 bg-white rounded">
          <h4 className="p-2 border-bottom">Library panel</h4>
          <TableWithLoader
            tableHeader={['ID.', 'Name', 'Address', 'Description']}
            tableItems={libraries}
            isLoading={loadingLibraries}
            tableAction={(e) => {
              this.setState({ selectedLibrary: e });
              this.toggle();
            }}
            withActions
            editHandler={(e) => this.deleteLibrary(e.id)}
          />
          <button
            type="button"
            className="btn btn-light"
            onClick={this.toggle}
          >
          New Library
          </button>
        </div>
        <div className="container">
          {!loading ? (
            selectedLibrary ? (
              <EditLibrary
                address={address}
                description={description}
                name={name}
                toggle={this.toggle}
                modal={modal}
                createLibrary={this.editLibrary}
                nameValue={selectedLibrary.name}
                addressValue={selectedLibrary.address}
                descriptionValue={selectedLibrary.description}
              />
            )
              : (
                <CreateLibrary
                  address={address}
                  description={description}
                  name={name}
                  toggle={this.toggle}
                  modal={modal}
                  createLibrary={this.createLibrary}
                />
              )
          ) : (
            <div className="spinner-border text-primary center" style={{ marginLeft: '50%' }} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
        <div className="shadow-lg p-3 mb-2 bg-white rounded">
          <h4 className="p-2 border-bottom">User panel</h4>
          <UserTableWithLoader
            tableHeader={['ID.', 'Name', 'Email', 'Role']}
            tableItems={users}
            isLoading={loadingUsers}
            banUser={(e) => {
              this.banUser(e.id);
            }}
            withActions
            giveRole={(e) => this.toggleSelect(e.id)}
          />
          <ChooseLibrary
            toggle={this.toggleSelect}
            modal={libraryModal}
            options={libraries}
            choose={(id) => { this.giveRole(user, id); }}
          />
        </div>
      </div>
    );
  }
}

export default Panel;

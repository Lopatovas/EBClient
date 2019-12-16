/* eslint-disable react/no-unused-state */
import React from 'react';

import Table from '../../components/bookTable';
import WithLoading from '../../HOC/loader';

const TableWithLoader = WithLoading(Table);

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false, books: [], loading: false, debt: [],
    };
    this.getBooks = this.getBooks.bind(this);
    this.checkDebt = this.checkDebt.bind(this);
  }

  componentDidMount() {
    this.setState({ loggedIn: localStorage.getItem('isUser') });
    this.checkDebt();
  }

  getBooks() {
    const params = {
      method: 'GET',
    };
    this.setState({ loading: true });
    fetch(`http://127.0.0.1:8000/book/showUserBookHistory/${this.props.match.params.id}`, params)
      .then((resp) => resp.json())
      .then((parsed) => this.setState({ books: parsed.history, loading: false }))
      .catch((e) => console.log(e));
  }

  checkDebt() {
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    };
    this.setState({ loading: true });
    fetch(`http://127.0.0.1:8000/book/showUserDebts/${localStorage.getItem('id')}`, params)
      .then((resp) => resp.json())
      .then((parsed) => {
        this.setState({ debt: parsed.books, loading: false });
        if (parsed.books.length > 0) {
          alert('You have a debt');
          this.setState({ books: parsed.books, loading: false });
        } else {
          this.getBooks();
        }
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { debt, loading, books } = this.state;
    return (
      <div className="container">
        <div className="card">
          <TableWithLoader
            tableHeader={debt.length > 0 ? ['Number', 'Name', 'Taken Till'] : ['ID.', 'Name', 'Author', 'Genre', 'Publisher', 'Status']}
            tableItems={debt.length > 0 ? debt : books}
            isLoading={loading}
          />
        </div>
      </div>
    );
  }
}

export default Panel;

/* eslint-disable no-nested-ternary */
import React from 'react';

import Table from '../../components/bookTable';
import MessageTable from '../../components/messageTable';
import WithLoading from '../../HOC/loader';
import CreateBook from '../../modals/createBook';
import EditBook from '../../modals/editBook';

const TableWithLoader = WithLoading(Table);
const MessageWithLoader = WithLoading(MessageTable);

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}, loading: false, modal: false, selectedBook: null,
    };
    this.getBooks = this.getBooks.bind(this);
    this.createBook = this.createBook.bind(this);
    this.toggle = this.toggle.bind(this);
    this.editBook = this.editBook.bind(this);
  }

  componentDidMount() {
    this.setState({ loggedIn: localStorage.getItem('isUser') });
    this.getBooks();
  }

  getBooks() {
    const params = {
      method: 'GET',
    };
    this.setState({ loading: true });
    fetch(`http://127.0.0.1:8000/book/showBookByLibrary/${localStorage.getItem('library')}`, params)
      .then((resp) => resp.json())
      .then((parsed) => { console.log(parsed); this.setState({ books: parsed.books, loading: false }); })
      .catch((e) => console.log(e));
  }

  toggle() {
    this.setState({ modal: !this.state.modal }, () => {
      if (!this.state.modal) {
        this.setState({ selectedBook: null });
      }
    });
  }

  createBook(name, publisher, genre, description, author) {
    this.setState({ loading: true });
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },
      body: JSON.stringify({
        name,
        status: 'not_taken',
        publisher,
        genre,
        description,
        author,
        library_id: localStorage.getItem('library'),
      }),
      method: 'POST',
    };
    fetch('http://127.0.0.1:8000/api/book/create', params)
      .then((resp) => resp.json())
      .then((parsed) => {
        if (parsed.errors) {
          this.setState({ errors: parsed.errors, loading: false });
        } else {
          this.toggle();
          alert(`${parsed.book.name} was created successfully!`);
          this.setState({ loading: false });
          this.getBooks();
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({ loading: false });
      });
  }

  editBook(name, publisher, genre, description, author, status) {
    this.setState({ loading: true });
    let body = JSON.stringify({
      book_id: this.state.selectedBook.id,
      name,
      author,
      publisher,
      genre,
      description,
      status,
      user_id: null,
      taken_from: null,
      taken_to: null,
    });
    if (status === 'taken') {
      const date = new Date();
      body = JSON.stringify({
        book_id: this.state.selectedBook.id,
        name,
        author,
        publisher,
        genre,
        description,
        status,
        taken_from: date.toISOString().slice(0, 10),
        taken_to: new Date((new Date()).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      });
    }
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },
      body,
      method: 'POST',
    };
    fetch('http://127.0.0.1:8000/api/book/update', params)
      .then((resp) => resp.json())
      .then((parsed) => {
        if (parsed.errors) {
          this.setState({ errors: parsed.errors, loading: false });
        } else {
          this.setState({ loading: false });
          alert('Book updated!');
          this.toggle();
          this.getBooks();
        }
      })
      .catch((e) => {
        alert('An unknow error has occured, please try again');
        console.log(e);
        this.setState({ loading: false });
      });
  }

  deleteBook(id) {
    this.setState({ loading: true });
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },
      body: JSON.stringify({
        book_id: id,
      }),
      method: 'POST',
    };
    fetch('http://127.0.0.1:8000/api/book/delete', params)
      .then((resp) => resp.json())
      .then((parsed) => {
        if (parsed.errors) {
          this.setState({ errors: parsed.errors, loading: false });
        } else {
          this.setState({ loading: false });
          alert('Book removed');
          this.getBooks();
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
      loading, modal, books, errors, selectedBook,
    } = this.state;
    const { address, description, name } = errors;
    return (
      <div className="container">
        <div className="shadow-lg p-3 mb-2 bg-white rounded">
          <h2 className="p-2">Librarians panel</h2>
        </div>
        {!loading ? (
          <div className="card">
            <h4 className="p-3">
            Books
            </h4>
            <TableWithLoader
              tableHeader={['ID.', 'Name', 'Author', 'Genre', 'Publisher', 'Status']}
              tableItems={books}
              isLoading={loading}
              tableAction={(e) => {
                this.setState({ selectedBook: e });
                this.toggle();
              }}
              withActions
              editHandler={(e) => this.deleteBook(e.id)}
            />
            <button
              type="button"
              className="btn btn-light"
              onClick={this.toggle}
            >
            New Book
            </button>
            {!loading ? (
              selectedBook ? (
                <EditBook
                  address={address}
                  description={description}
                  name={name}
                  toggle={this.toggle}
                  modal={modal}
                  createBook={this.editBook}
                  nameValue={selectedBook.name}
                  publisherValue={selectedBook.publisher}
                  genreValue={selectedBook.genre}
                  descriptionValue={selectedBook.description}
                  authorValue={selectedBook.author}
                  options={[{ id: 'taken', name: 'Taken' }, { id: 'not_taken', name: 'Available' }]}
                  selectedOpt={selectedBook.status}
                />
              )
                : (
                  <CreateBook
                    address={address}
                    description={description}
                    name={name}
                    toggle={this.toggle}
                    modal={modal}
                    createBook={this.createBook}
                  />
                )
            ) : (
              <div className="spinner-border text-primary center" style={{ marginLeft: '50%' }} role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        ) : (
          <div className="spinner-border text-primary" style={{ marginLeft: '50%' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <div className="card mt-2">
          <h4 className="p-3">
            Messages
          </h4>
          <MessageWithLoader
            tableHeader={['From', 'To', 'Message']}
            tableItems={books}
            isLoading={loading}
          />
          <button
            type="button"
            className="btn btn-light"
            onClick={() => { this.props.history.push(`/EBClient/Message/${this.props.match.params.id}`); }}
          >
            New Message
          </button>
        </div>
      </div>
    );
  }
}

export default Panel;

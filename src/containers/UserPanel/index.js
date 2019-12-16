/* eslint-disable react/no-unused-state */
import React from 'react';

import Table from '../../components/bookTable';
import WithLoading from '../../HOC/loader';
import MessageTable from '../../components/messageTable';

const TableWithLoader = WithLoading(Table);
const MessageWithLoader = WithLoading(MessageTable);

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false, books: [], loading: false, debt: [], messages: [],
    };
    this.getBooks = this.getBooks.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  componentDidMount() {
    this.setState({ loggedIn: localStorage.getItem('isUser') });
    this.getMessages();
    this.getBooks();
  }

  getMessages() {
    const params = {
      method: 'GET',
    };
    this.setState({ loading: true });
    fetch(`http://127.0.0.1:8000/message/showAllByUser/${localStorage.getItem('id')}`, params)
      .then((resp) => resp.json())
      .then((parsed) => { console.log(parsed); this.setState({ messages: [...parsed.messagesTo, ...parsed.messagesFrom], loading: false }); })
      .catch((e) => console.log(e));
  }

  getBooks() {
    const params = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },

    };
    this.setState({ loading: true });
    fetch(`http://127.0.0.1:8000/api/book/showUserBookHistory/${this.props.match.params.id}`, params)
      .then((resp) => resp.json())
      .then((parsed) => this.setState({ books: parsed.history, loading: false }))
      .catch((e) => console.log(e));
  }

  render() {
    const {
      loading, books, messages,
    } = this.state;
    console.log(books);
    return (
      <div className="container">
        <div className="card">
          <table className="table table-hover">
            <thead>
              <tr>
                {['ID.', 'Taken From', 'Taken To'].map((item, i) => <th scope="col" key={i}>{item}</th>)}
              </tr>
            </thead>
            <tbody>
              {books.map((item) => (
                <tr key={item.id}>
                  <td>{item.book_id}</td>
                  <td>{item.taken_from}</td>
                  <td>{item.taken_to ? item.taken_to : 'Not confirmed yet'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card mt-2">
          <h4 className="p-3">
            Messages
          </h4>
          <MessageWithLoader
            tableHeader={['From', 'To', 'Message']}
            tableItems={messages}
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

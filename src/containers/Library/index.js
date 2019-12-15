import React from 'react';
import navBarRoutes from '../../config/navRoutes';

import NavBar from '../../components/navBar';
import BookCard from '../../components/bookCard';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [], querry: '' };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    const params = {
      method: 'GET',
    };
    this.setState({ loading: true });
    fetch(`http://127.0.0.1:8000/book/showBookByLibrary/${this.props.match.params.id}`, params)
      .then((resp) => resp.json())
      .then((parsed) => { console.log(parsed); this.setState({ books: parsed.books }); })
      .catch((e) => console.log(e));
  }

  render() {
    const { books, querry } = this.state;
    return (
      <div>
        <form className="mx-auto" style={{ width: '200px' }}>
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { this.setState({ querry: e.target.value }); }} />
        </form>
        <div className="container d-flex flex-row flex-wrap">
          {books.map((book) => (
            book.name.toLowerCase().includes(querry.toLowerCase()) ? (
              <BookCard
                id={book.id}
                title={book.name}
                description={book.description}
                buttonTitle="Let's check it out!"
              />
            ) : null
          ))}
        </div>
      </div>
    );
  }
}

export default Library;

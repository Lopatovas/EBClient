import React from 'react';
import navBarRoutes from '../../config/navRoutes';

import NavBar from '../../components/navBar';
import BookCard from '../../components/bookCard';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    const params = {
      method: 'GET',
    };
    this.setState({ loading: true });
    fetch(`http://127.0.0.1:8000/book/getBookByLibrary/${this.props.match.params.id}`, params)
      .then((resp) => resp.json())
      .then((parsed) => { console.log(parsed); this.setState({ books: parsed.books }); })
      .catch((e) => console.log(e));
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        {localStorage.getItem('isUser') ? <NavBar routes={navBarRoutes.SIGNED_IN} /> : <NavBar routes={navBarRoutes.DEFAULT} />}
        <div className="container d-flex flex-row flex-wrap">
          {books.map((book) => (
            <BookCard
              id={book.id}
              title={book.title}
              description={book.description}
              buttonTitle="Let's check it out!"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Library;

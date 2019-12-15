import React from 'react';
import Rating from '../../components/ratingWidget';
import Comment from '../../components/comment';

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, book: {} };
    this.getBook = this.getBook.bind(this);
  }

  componentDidMount() {
    this.getBook();
  }

  getBook() {
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.props.match.params.id,
      }),
      method: 'POST',
    };
    this.setState({ loading: true });
    fetch('http://127.0.0.1:8000/book/get', params)
      .then((resp) => resp.json())
      .then((parsed) => { console.log(parsed); this.setState({ book: parsed.book[0], loading: false }); })
      .catch((e) => console.log(e));
  }

  render() {
    const { book } = this.state;
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card">
              <div className="card-header text-center">
                {book.name}
              </div>
              <div className="card-body d-flex flex-row flex-wrap justify-content-between">
                <div className="w-50">
                  <h4>Description:</h4>
                  <p>
                    {book.description}
                  </p>
                  <p>{`Created by ${book.author}`}</p>
                  <p>{`Published by ${book.publisher}`}</p>
                  <p>{`Genre: ${book.genre}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetails;

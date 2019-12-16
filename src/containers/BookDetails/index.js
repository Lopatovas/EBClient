import React from 'react';
import Comment from '../../components/comment';
import CommentInput from '../../components/commentInput';

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, book: {}, comments: [] };
    this.getBook = this.getBook.bind(this);
    this.getComments = this.getComments.bind(this);
    this.postComment = this.postComment.bind(this);
    this.takeBook = this.takeBook.bind(this);
  }

  componentDidMount() {
    this.getBook();
    this.getComments();
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
      .then((parsed) => { this.setState({ book: parsed.book[0], loading: false }); })
      .catch((e) => console.log(e));
  }

  getComments() {
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    };
    this.setState({ loading: true });
    fetch(`http://127.0.0.1:8000/comment/showAllByBook/${this.props.match.params.id}`, params)
      .then((resp) => resp.json())
      .then((parsed) => { this.setState({ comments: parsed.comment, loading: false }); })
      .catch((e) => console.log(e));
  }

  postComment(content) {
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        book_id: this.props.match.params.id,
        user_id: localStorage.getItem('id'),
        comment: content,
        status: 'available',
      }),
      method: 'POST',
    };
    this.setState({ loading: true });
    fetch('http://127.0.0.1:8000/comment/create', params)
      .then((resp) => resp.json())
      .then(() => {
        this.getComments();
        this.setState({ loading: false });
      })
      .catch((e) => console.log(e));
  }

  takeBook() {
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },
      body: JSON.stringify({
        id: this.props.match.params.id,
      }),
      method: 'POST',
    };
    this.setState({ loading: true });
    fetch('http://127.0.0.1:8000/api/book/take', params)
      .then((resp) => resp.json())
      .then(() => {
        this.setState({ loading: false });
        alert('Book reserved succesfully');
        this.props.history.push('/EBClient/');
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { book, comments, loading } = this.state;
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card mb-2">
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
            {localStorage.getItem('role') === 'user' && book.status !== 'taken' ? (
              <div className="card mb-2">
                <button onClick={() => { this.takeBook(); }} type="button" className="btn btn-light">
                Reserve book
                </button>
              </div>
            ) : null}
            {!loading ? (
              <>
                <div>
                  <h4>Comments</h4>
                </div>
                <div>
                  {comments.map((comment) => <Comment comment={comment.comment} key={comment.id} />)}
                </div>
                <div>
                  {localStorage.getItem('session') ? <CommentInput handleComment={this.postComment} /> : null}
                </div>
              </>
            ) : (
              <div className="spinner-border text-primary" style={{ marginLeft: '50%' }} role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetails;

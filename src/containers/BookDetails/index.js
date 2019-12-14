import React from 'react';
import Rating from '../../components/ratingWidget';
import Comment from '../../components/comment';

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card">
              <div className="card-header text-center">
                  Book title
              </div>
              <div className="card-body d-flex flex-row flex-wrap justify-content-between">
                <div>
                  <img className="card-img-top" src="https://thumbs-prod.si-cdn.com/T_txo7Wkgu6aPjd6a8thp1kDL2s=/420x240/https://public-media.si-cdn.com/filer/91/91/91910c23-cae4-46f8-b7c9-e2b22b8c1710/lostbook.jpg" alt="Book" />
                </div>
                <div className="w-50">
                  <h4>Description:</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>Author placeholder</p>
                  <p>Publisher placeholder</p>
                  <p>Year of publish placeholder</p>
                  <p>Genre placeholder</p>
                  <div className="d-flex flex-row flex-wrap justify-content-between align-items-center">
                    <p>
                    User rating
                    </p>
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
            <Comment comment="Pretty nice" id={1} />
            <Comment comment="Pretty nice" id={2} />
            <Comment comment="Pretty nice" id={3} />
            <Comment comment="Pretty nice" id={4} />
            <Comment comment="Pretty nice" id={5} />
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetails;

import React from 'react';
import Comment from '../../components/commentInput';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(message) {
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('session')}`,
      },
      body: JSON.stringify({
        to_id: 2,
        from_id: this.props.match.params.id,
        message,
        status: 'available',
      }),
      method: 'POST',
    };
    fetch('http://127.0.0.1:8000/message/create', params)
      .then((resp) => resp.json())
      .then((parsed) => {
        if (parsed.errors) {
          console.log(parsed.errors);
        } else {
          alert('Sent!');
          this.props.history.push(`/EBClient/${localStorage.getItem('role')}/${this.props.match.params.id}`);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }


  render() {
    const { options } = this.state;
    return (
      <div className="container">
        <Comment label="Message" handleComment={this.sendMessage}>
          <div className="input-group">
            <select className="custom-select mb-2" id="inputGroupSelect" ref={(input) => { this.selectBox = input; }}>
              {options.map((opt) => <option value={opt.id}>{opt.name}</option>)}
            </select>
          </div>
        </Comment>
      </div>
    );
  }
}

export default Message;

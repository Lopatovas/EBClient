import React, { Component } from 'react';

export const ModalHeader = (props) => <div className="modal-header">{props.children}</div>;

export const ModalBody = (props) => <div className="modal-body">{props.children}</div>;

export const ModalFooter = (props) => <div className="modal-footer">{props.children}</div>;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: '',
      display: 'none',
      background: '',

    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.isOpen ? this.openModal() : this.closeModal();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.props.isOpen ? this.openModal() : this.closeModal();
    }
  }

  openModal() {
    this.setState({
      modalShow: 'show',
      display: 'block',
      background: 'radial-gradient(gray, transparent)',

    });
  }

  closeModal() {
    this.setState({
      modalShow: '',
      display: 'none',
    });
  }

  render() {
    return (
      <div
        className={`modal fade ${this.state.modalShow}`}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        style={{ display: this.state.display, background: this.state.background }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;

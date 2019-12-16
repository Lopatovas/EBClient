/* eslint-disable react/forbid-prop-types */
// eslint-disable-next-line react/no-array-index-key

import React from 'react';
import PropTypes from 'prop-types';
import FormWrapper from '../components/formWrapper';
import Input from '../components/input';
import Modal, { ModalHeader, ModalBody } from '../components/modal';

class EditBook extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    const {
      nameValue, publisherValue, descriptionValue, genreValue, authorValue,
    } = this.props;
    this.nameInput.value = nameValue;
    this.publisherInput.value = publisherValue;
    this.genreInput.value = genreValue;
    this.descriptionField.value = descriptionValue;
    this.authorInput.value = authorValue;
  }

  submitForm() {
    const { createBook } = this.props;
    createBook(this.nameInput.value,
      this.publisherInput.value, this.genreInput.value, this.descriptionField.value, this.authorInput.value, this.selectBox.value);
  }

  render() {
    const {
      toggle, modal, name, address, description, options, selectedOpt,
    } = this.props;
    return (
      <Modal isOpen={modal}>
        <ModalHeader>
          <h3>Edit Book</h3>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={toggle}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeader>
        <ModalBody>
          <FormWrapper callBack={this.submitForm} submitText="Submit">
            <>
              <Input labelText="Name" id="nameField" error={name}>
                <input type="text" className="form-control" id="nameField" placeholder="Art of War" ref={(input) => { this.nameInput = input; }} />
              </Input>
              <Input labelText="Publisher" id="publisherField" error={address}>
                <input type="text" className="form-control" id="publisherField" placeholder="Vaga" ref={(input) => { this.publisherInput = input; }} />
              </Input>
              <Input labelText="Author" id="authorField" error={address}>
                <input type="text" className="form-control" id="authorField" placeholder="Sun Tzu" ref={(input) => { this.authorInput = input; }} />
              </Input>
              <Input labelText="Description" id="descriptionField" error={description}>
                <textarea type="text" rows={5} style={{ resize: 'none' }} className="form-control" id="descriptionField" placeholder="" ref={(input) => { this.descriptionField = input; }} />
              </Input>
              <Input labelText="Genre" id="genreField" error={description}>
                <input type="text" className="form-control" id="genreField" placeholder="Horror" ref={(input) => { this.genreInput = input; }} />
              </Input>
              <Input labelText="Genre" id="genreField" error={description}>
                <input type="text" className="form-control" id="genreField" placeholder="Horror" ref={(input) => { this.genreInput = input; }} />
              </Input>
              <Input labelText="Status" id="statusField" error={description}>
                <select className="custom-select mb-2" id="inputGroupSelect" ref={(input) => { this.selectBox = input; }}>
                  {options.map((opt) => (selectedOpt === opt.id ? <option value={opt.id} selected>{opt.name}</option> : <option value={opt.id}>{opt.name}</option>))}
                </select>
              </Input>
            </>
          </FormWrapper>
        </ModalBody>
      </Modal>
    );
  }
}

EditBook.propTypes = {
  toggle: PropTypes.func.isRequired,
  createBook: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  name: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
  nameValue: PropTypes.string.isRequired,
  authorValue: PropTypes.string.isRequired,
  genreValue: PropTypes.string.isRequired,
  publisherValue: PropTypes.string.isRequired,
  descriptionValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOpt: PropTypes.string.isRequired,
};

EditBook.defaultProps = {
  name: '',
  address: '',
  description: '',
};

export default EditBook;

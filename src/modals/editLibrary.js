// eslint-disable-next-line react/no-array-index-key

import React from 'react';
import PropTypes from 'prop-types';
import FormWrapper from '../components/formWrapper';
import Input from '../components/input';
import Modal, { ModalHeader, ModalBody } from '../components/modal';

class EditLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    const { nameValue, addressValue, descriptionValue } = this.props;
    this.nameInput.value = nameValue;
    this.addressInput.value = addressValue;
    this.descriptionField.value = descriptionValue;
  }

  submitForm() {
    const { createLibrary } = this.props;
    createLibrary(this.nameInput.value, this.addressInput.value, this.descriptionField.value);
  }

  render() {
    const {
      toggle, modal, name, address, description,
    } = this.props;
    return (
      <Modal isOpen={modal}>
        <ModalHeader>
          <h3>Edit Library</h3>
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
          <FormWrapper callBack={this.submitForm} submitText="Edit Library">
            <>
              <Input labelText="Name" id="nameField" error={name}>
                <input type="text" className="form-control" id="nameField" placeholder="Fabulous Reading institution" ref={(input) => { this.nameInput = input; }} />
              </Input>
              <Input labelText="Address" id="addressField" error={address}>
                <input type="text" className="form-control" id="addressField" placeholder="Studentų g. 45" ref={(input) => { this.addressInput = input; }} />
              </Input>
              <Input labelText="Description" id="descriptionField" error={description}>
                <textarea type="text" rows={5} style={{ resize: 'none' }} className="form-control" id="descriptionField" placeholder="" ref={(input) => { this.descriptionField = input; }} />
              </Input>
            </>
          </FormWrapper>
        </ModalBody>
      </Modal>
    );
  }
}

EditLibrary.propTypes = {
  toggle: PropTypes.func.isRequired,
  createLibrary: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  name: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
  nameValue: PropTypes.string.isRequired,
  addressValue: PropTypes.string.isRequired,
  descriptionValue: PropTypes.string.isRequired,
};

EditLibrary.defaultProps = {
  name: '',
  address: '',
  description: '',
};

export default EditLibrary;

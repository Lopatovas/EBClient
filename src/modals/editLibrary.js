// eslint-disable-next-line react/no-array-index-key

import React from 'react';
import PropTypes from 'prop-types';
import FormWrapper from '../components/formWrapper';
import Input from '../components/input';
import Modal, { ModalHeader, ModalBody } from '../components/modal';

function EditLibrary(props) {
  let nameInput;
  let addressInput;
  let descriptionField;

  const {
    toggle, createLibrary, modal, name, address, description,
  } = props;

  const submitForm = () => {
    createLibrary(nameInput.value, addressInput.value, descriptionField.value);
  };


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
        <FormWrapper callBack={submitForm} submitText="Create Library">
          <>
            <Input labelText="Name" id="nameField" error={name}>
              <input type="text" className="form-control" id="nameField" placeholder="Fabulous Reading institution" ref={(input) => { nameInput = input; }} />
            </Input>
            <Input labelText="Address" id="addressField" error={address}>
              <input type="text" className="form-control" id="addressField" placeholder="Studentų g. 45" ref={(input) => { addressInput = input; }} />
            </Input>
            <Input labelText="Description" id="descriptionField" error={description}>
              <textarea type="text" rows={5} style={{ resize: 'none' }} className="form-control" id="descriptionField" placeholder="" ref={(input) => { descriptionField = input; }} />
            </Input>
          </>
        </FormWrapper>
      </ModalBody>
    </Modal>
  );
}

EditLibrary.propTypes = {
  toggle: PropTypes.func.isRequired,
  createLibrary: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  name: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
};

EditLibrary.defaultProps = {
  name: '',
  address: '',
  description: '',
};

export default EditLibrary;

// eslint-disable-next-line react/no-array-index-key

import React from 'react';
import PropTypes from 'prop-types';
import FormWrapper from '../components/formWrapper';
import Modal, { ModalHeader, ModalBody } from '../components/modal';

function CreateLibrary(props) {
  let selectBox;

  const {
    toggle, choose, modal, options,
  } = props;

  const submitForm = () => {
    choose(selectBox.value);
  };

  return (
    <Modal isOpen={modal}>
      <ModalHeader>
        <h3>Confirm</h3>
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
          <div className="input-group">
            <select className="custom-select mb-2" id="inputGroupSelect" ref={(input) => { selectBox = input; }}>
              {options.map((opt) => <option value={opt.id}>{opt.name}</option>)}
            </select>
          </div>
        </FormWrapper>
      </ModalBody>
    </Modal>
  );
}

CreateLibrary.propTypes = {
  toggle: PropTypes.func.isRequired,
  choose: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
};

export default CreateLibrary;

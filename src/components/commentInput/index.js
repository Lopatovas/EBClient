import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import FormWrapper from '../formWrapper';

function CommentInput(props) {
  let descriptionField;
  const submitForm = () => {
    const { handleComment } = props;
    handleComment(descriptionField.value);
  };
  return (
    <FormWrapper callBack={submitForm} submitText="Submit">
      <Input labelText="Comment" id="descriptionField">
        <textarea type="text" rows={5} style={{ resize: 'none' }} className="form-control" id="descriptionField" placeholder="" ref={(input) => { descriptionField = input; }} />
      </Input>
    </FormWrapper>

  );
}

CommentInput.propTypes = {
  handleComment: PropTypes.func,
};

CommentInput.defaultProps = {
  handleComment: () => {},
};


export default CommentInput;

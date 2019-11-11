import React from 'react';
import PropTypes from 'prop-types';

import FormWrapper from '../../components/formWrapper';
import Input from '../../components/input';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {};
  }

  submitForm() {
    const { history } = this.props;
    history.push('/EBClient/Login');
  }

  render() {
    return (
      <div className="container">
        <FormWrapper callBack={this.submitForm}>
          <Input labelText="Name" id="nameField">
            <input type="text" className="form-control" id="nameField" placeholder="Bob" />
          </Input>
          <Input labelText="Email" id="emailField">
            <input type="email" className="form-control" id="emailField" placeholder="name@example.com" />
          </Input>
          <Input labelText="Password" id="passwordField">
            <input type="password" className="form-control" id="passwordField" placeholder="" />
          </Input>
        </FormWrapper>
      </div>
    );
  }
}

Register.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Register;

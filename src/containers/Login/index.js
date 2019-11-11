/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import FormWrapper from '../../components/formWrapper';
import Input from '../../components/input';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {};
  }

  submitForm() {
    const { history } = this.props;
    localStorage.setItem('isUser', 'yes');
    history.push('/EBClient/');
  }

  render() {
    return (
      <div className="container">
        <FormWrapper callBack={this.submitForm}>
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

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Login;

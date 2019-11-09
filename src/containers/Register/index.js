import React from 'react';
import PropTypes from 'prop-types';

import navBarRoutes from '../../config/navRoutes';

import NavBar from '../../components/navBar';
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
    localStorage.setItem('isUser', 'yes');
    history.push('/');
  }

  render() {
    return (
      <div>
        <NavBar routes={navBarRoutes.DEFAULT} />
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
      </div>
    );
  }
}

Register.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Register;

import React, {Component} from 'react';

class SignUpForm extends Component {
  render() {
    return (
      <div className ="tab__form__up ">
      <input type="email" placeholder="Email adress"/>
      <input type="text" placeholder="Enter your name"/>
      <input type="password" placeholder="Create a password"/>
      <button
        onClick={this.props.changeActive}
        >Registration</button>
    </div>
    );
  }
}

export default SignUpForm;
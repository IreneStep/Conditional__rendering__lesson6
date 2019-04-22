import React, {Component} from 'react';

class SignInForm extends Component {
  render() {
    return (
      <div className ="tab__form__in">
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      <button
        onClick={this.props.changeActive}
      >Login</button>
      </div>
    );
  }
}
export default SignInForm;
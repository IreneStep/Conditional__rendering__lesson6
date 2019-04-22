import React, { Component } from 'react';
import sell_it_logo from '../../images/sell-it.png';
import sell_it_logo_white from '../../images/sell-it-logo-white.png';
import SignInForm  from '../LoginPage/components/SignInForm';
import SignUpForm from '../LoginPage/components/SignUpForm';
import Footer from '../LoginPage/components/Footer'


class LoginPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTabState: 'tab__form__in',
    };
  }

  signInClick = () => {
    this.setState({
      activeTabState: 'tab__form__in',
    });
  }
  

  signUpClick = () => {
    this.setState({
      activeTabState: 'tab__form__up',
    });
  }

  render() {
    let activeTab;

    if (this.state.activeTabState === 'tab__form__in') {
        activeTab = 
          <SignInForm changeActive = {this.props.changeActive}/>;
    }
    if (this.state.activeTabState === 'tab__form__up') {
        activeTab = 
          <SignUpForm changeActive = {this.props.changeActive}/>;
    }
    

    return (
      <div className='wrapper'>
        <div className="section">
          <div className="section__left">
            <div>
              <img className="left__logo"
                src={sell_it_logo}
                alt="Logo"
              />
            </div>
          </div>
          <div className="section__right">
            <div>
              <img className="right__logo" 
                src={sell_it_logo_white}
                alt="Logo"
              />
            </div>
            <div className="tabs__form">
              <div className="btn">
                <button 
                  className=
                  {
                    this.state.activeTabState === 'tab__form__in' ?
                    "tab__in tab active" :
                    "tab__in tab"
                  } 
                  onClick={this.signInClick}
                >Sign In</button>
                <button
                    className=
                    {
                      this.state.activeTabState === 'tab__form__up' ?
                      "tab__up tab active" :
                      "tab__up tab"
                    }
                    onClick={this.signUpClick}
                    >Sign Up</button>
              </div>
              {activeTab}
            </div>
          </div>
        </div>
        <Footer
        />
      </div>
    );
  };
}

export default LoginPage;
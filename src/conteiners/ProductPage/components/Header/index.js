import React, {Component} from 'react';
import search_icon from '../../../../images/search-icon.png';
import sign_out_icon from '../../../../images/sign-out-icon.png';
import sell_it_logo from '../../../../images/sell-it.png';
import user_avatar from '../../../../images/91.png';

export default class Header extends Component {
  render() {
    return (
      <header>
      <div className ="header__logo">
        <img 
          src={sell_it_logo} alt="Logo"
        />
      </div>
      <div className="header__search">
        <button>
          <img 
            src={search_icon} alt="Search"/>
        </button>
        <input type="text" placeholder="Try find something" />
      </div>
      <div className="header__account">
         <div className="wrapper__account">
           <div className="account__avatar">
            <div className="avatar__icon">
              <img src={user_avatar} alt="Avatar"/>
            </div>
            <div className="account__nickname">
              Kim Evans
            </div> 
           </div> 
          <div className="account__sign__out">
            <img 
              onClick={this.props.changeActive}
              src={sign_out_icon} alt="Sign out"/>
          </div>
        </div>
      </div>
      </header>

    );
  }
}
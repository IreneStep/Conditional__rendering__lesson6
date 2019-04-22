import React, { Component } from 'react';
import './App.css';
import LoginPage from './conteiners/LoginPage';
import ProductPage from './conteiners/ProductPage';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true,
    };
  }
  
  handleClick = () => {
    this.setState({
      isLoginActive: !this.state.isLoginActive,
    });
  }

  render() {
    const activePage = this.state.isLoginActive ?
    <LoginPage changeActive={this.handleClick} /> :
    <ProductPage changeActive={this.handleClick} />
    
    return (
      <div>
        {activePage} 
      </div>
    );
  }
}

export default App;

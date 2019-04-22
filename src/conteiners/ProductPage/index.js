import React, { Component } from 'react';
import ProductItem from './components/ProductItem'
import Header from './components/Header';
import Footer from './components/Footer';
import product1 from '../../images/product1.jpg';
import product2 from '../../images/product2.jpg';
import product3 from '../../images/product3.jpg';
import product4 from '../../images/product4.jpg';

class ProductPage extends Component {
  render() {
    return (
      <div className='wrapper__flex'>
        <Header
          changeActive={this.props.changeActive}
        />
        <div className='content__box'>  
          <ProductItem
            product={product1}
          />
          <ProductItem
            product={product2}
          />
          <ProductItem
            product={product3}
          />
          <ProductItem
            product={product4}
          />
          <ProductItem
            product={product1}
          />
          <ProductItem
            product={product2}
          />
          <ProductItem
            product={product3}
          />
          <ProductItem
            product={product4}
          />
          <ProductItem
            product={product1}
          />
          <ProductItem
            product={product2}
          />
          <ProductItem
            product={product3}
          />
          <ProductItem
            product={product4}
          />
        </div>
        <Footer/>
      </div>
    )
  }
}

export default ProductPage;
import React from 'react';
import eye_icon from '../../../../images/eye-icon.png';

export default (props) => {
  return (
    <div className="box__product">
    <div className="product__img">
      <img  
        src={props.product} 
        alt="Product preview"
      />

    <div className="product__title">
      <div className="title__text">
          Product title
        </div>
      <div className="title__icon">
        <img  
          src={eye_icon} 
          alt="Eye icon" 
        />
      </div>
      </div>
    </div>  
    </div>
  )
}
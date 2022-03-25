import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product);
    const {name,img,brand,price}=product;
    return (
        <div className='product col-12 col-lg-4 my-4'>
            <img className='product-img' src={img} alt="" />
            <div className='product-info'>
                <h2 className=''>{name}</h2>
                <h4>$ {price}</h4>
                <p>Produced By: <span className='brand'>{brand}</span></p>
            </div>
        </div>
    );
};

export default Product;
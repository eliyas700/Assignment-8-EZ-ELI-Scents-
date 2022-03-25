import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import './Product.css'

const Product = ({product,addToCart}) => {
    const {name,img,brand,price}=product;
    
    return (
        <div className='product col-12 col-lg-4 my-4'>
            <img className='product-img' src={img} alt="" />
            <div className='product-info'>
                <h3 className=''>{name}</h3>
                <h5>$ {price}</h5>
                <p>Produced By: <span className='brand'>{brand}</span></p>
                <button onClick={()=>addToCart(product)} className='add-cart-btn'><p>Add To Cart <BsCartPlusFill size={22}/></p></button>
            </div>
        </div>
    );
};

export default Product;
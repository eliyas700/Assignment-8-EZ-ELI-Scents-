import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css'
const AllProducts = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='products-box container-fluid mx-auto'>
           <div className='products row justify-content-between '>
           {
                products.map(product=><Product key={product.id} product={product}></Product>
                    )
            }
           </div>
        </div>
    );
};

export default AllProducts;
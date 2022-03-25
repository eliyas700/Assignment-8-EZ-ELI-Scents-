import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { MdOutlineCleaningServices} from 'react-icons/md';
import {GiPerspectiveDiceSixFacesRandom} from 'react-icons/gi';
import './AllProducts.css'
const AllProducts = () => {
    const[products,setProducts]=useState([]);
    const[cart, setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const addToCart=(item)=>{
       const newCart=[...cart, item]
       setCart(newCart)
    //    console.log(newCart);
    }
    const cleanCart=()=>{
       let empty=[]
        setCart(empty)
    }
    const chooseOne=()=>{
        const empty=[];
        const luck=cart[Math.floor(Math.random()*cart.length)];
        const newObj=[...empty, luck]
        setCart(newObj)
        
    }
    return (
        <div className='products-box container-fluid mx-auto'>
           <div className='products row justify-content-between '>
           {
                products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>
                    )
            }
           </div>
           <div className='cart-container '>
           <h4 className='text-center fw-bold cart-title my-3'>Cart Details</h4>
               {
                   cart.map(item=><Cart key={item.id} item={item}></Cart>)
               }
               
               <button onClick={cleanCart} className='my-3 mx-auto d-block py-2 px-2 btn-danger clean-cart'>Clean Cart <MdOutlineCleaningServices size={20}/> </button>
               <button onClick={chooseOne} className='my-3 mx-auto d-block py-2 px-2 btn-success clean-cart'>Select One<GiPerspectiveDiceSixFacesRandom size={22}/></button>
           </div>
        </div>
    );
};

export default AllProducts;
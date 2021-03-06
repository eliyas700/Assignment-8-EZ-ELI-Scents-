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

    // Add Element To Cart
    const addToCart=(item)=>{
    if(cart.length>=4){
        alert('Oops! You Can Only Add 4 Items.')
    }
    else{
       const existedItem=cart.find(pro=>pro.id === item.id)
       let newCart=[];
      if(!existedItem){
         newCart=[...cart, item];
         item.quantity=1;
      }
      else{
        const unexistedItems=cart.filter(pro=>pro.id !== item.id);
        newCart=[...unexistedItems,existedItem];
        item.quantity=item.quantity+1;
      }
      setCart(newCart)
    }
}
//Reset Cart 
    const cleanCart=()=>{
       let empty=[]
       cart.length>=1 ? setCart(empty) : alert("Oops! There's Nothing To Clean")
        
    }
//Randomly Choose One Element From Cart
    const chooseOne=()=>{
        const empty=[];
        const luck=cart[Math.floor(Math.random()*cart.length)];
        const newObj=[...empty, luck]
        cart.length>=2 ? setCart(newObj) : alert('Please Select At Least 2 Items!') 
        
    }
// Delete an Element  
    const deleteItem=(item)=>{
        let newCart=[...cart]
        newCart=cart.filter(pro=>pro.id !== item.id);
        setCart(newCart)
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
                   cart.map(item=><Cart key={item.id} setCart={setCart} deleteItem={deleteItem} item={item}></Cart>)
               }
               {
                   cart.length>=1&&<button onClick={cleanCart} className='my-3 mx-auto d-block py-2 px-2 btn-danger clean-cart'>Clean Cart <MdOutlineCleaningServices size={20}/> </button>
               }
               {
                   cart.length>=2&&<button onClick={chooseOne} className='my-3 mx-auto d-block py-2 px-2 btn-success clean-cart'>Select One<GiPerspectiveDiceSixFacesRandom size={22}/></button>
               }
               
           </div>
        </div>
    );
};

export default AllProducts;
import React from 'react';
import './Cart.css'
import { AiFillDelete } from 'react-icons/ai';
const Cart = ({item,deleteItem}) => {

    const {img,name,quantity}=item
    // console.log(item);
   
    return (
<div>
    <div className="card mb-3" >
        <div className="row g-0 align-items-center">
            <div className="col-md-3">
                <img className='cart-img' src={img} alt={name}/>
                {/* <img src={}className="img-fluid rounded-start" alt="..."> */}
            </div>
            <div className="col-md-9 py-2">
            <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">{quantity}</span>
                <div className="card-body d-flex">
                 <h6 className="card-title">{item.name}</h6>
                 <button onClick={()=>{deleteItem(item)}} title='Delete This Item' className='delete-cart'>< AiFillDelete size={25}/></button>
                
                </div>
             </div>
        </div>
    </div>
</div>
    );
};

export default Cart;
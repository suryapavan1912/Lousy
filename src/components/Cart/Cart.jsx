import React from 'react'
import { Trash2 } from 'react-feather'
import './Cart.scss'
import useFetch from '../fetch'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userr } from '../../features/counter/counterSlice'

function Cart() {

const user = useSelector(userr)
const [data] = useFetch('/user?userid='+ user.id)
console.log(data);

  return ( <>{ data &&
    <div className="maincart">
        {data.length>0?<h1>Products in your cart</h1>:<div className='empty'><h2>Your Bag Is Empty</h2><h2>Start Filling It Up!</h2></div>}

            {data?.map((item,id)=>{return(
                <div className="items" key={id}>
                <div className='img'>
                    <NavLink target="_blank" to={`/product/${item.id}`}><img src={item.images[0]} alt="" /></NavLink>
                </div>
                <div className='info'>
                    <NavLink target="_blank" to={`/product/${item.id}`}><p className='brand'>{item.brand}</p></NavLink>
                    <NavLink target="_blank" to={`/product/${item.id}`}><p className='title'>{item.title}</p></NavLink>
                    <div className="flex">
                        <p className='price'>₹{item.price}</p>
                        <p className="oldprice">{item.oldprice && <span>₹{item.oldprice}</span>}</p> 
                        <p>{item.oldprice && <span className='discount'>{Math.round(100*((item.oldprice-item.price)/item.oldprice))}% off</span>}</p>
                    </div>
                    <div className="size">
                        <p>Size:S</p>
                        <p>Qty:1</p>
                    </div>
                    
                </div>
                {/* <div className='del'>
                    <Trash2 />
                </div> */}
                </div>
            )})}
        {data.length>0?<><div className="total">
            <p>SUBTOTAL</p>
            <p>₹9999</p>
        </div>
        <button className='checkout'>PROCEED TO CART</button></>:null}
        {/* <p className="reset">Reset Cart</p> */}
        <p className='reset'>Free Shipping & Returns | 100% Handpicked | Assured Quality</p>
    </div>}
    </>
  )
}

export default Cart

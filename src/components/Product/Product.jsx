import React from 'react'
import { useState } from 'react'
import './Product.scss'
import { ChevronDown, Heart, ShoppingBag } from 'react-feather'
import useFetch from '../fetch'

function Product() {

const [image,setimage] = useState(0)
const [quantity,setquantity]  = useState(0)
const [data] = useFetch('/1')


  return (
    <div>
    { data && 
    <div className='product'>
      <div className="left">
        <div className="array">
          {data.images.map((img,id) => <img src={img} key={id} alt=""  onClick={()=>setimage(id)}/>)}
        </div>
        <div className="img">
          <img src={data.images[image]}  alt="" />
        </div>
      </div>
      <div className="right">
        <div className='top'>
          <div className="info">
            <p className='brand'>{data.brand}</p>
            <p className='title'>{data.title}</p>
          </div>
          <div className="price">
            <p className='new'>₹{data.price}</p>
            <p className='old'>MRP <span>₹{data.oldprice}</span></p>
          </div>
          <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci ducimus sit placeat velit voluptatibus sed quidem ut corporis, quibusdam quis consequatur magni sapiente, quisquam deleniti. Labore distinctio accusamus debitis.</p>
          </div>
          <div className="count">
            <button onClick={()=>{setquantity(pre=>pre>0?pre-1:0)}}>-</button>
            <p>{quantity}</p>
            <button onClick={()=>{setquantity(pre=>pre+1)}} >+</button>
          </div>
          <div className="cart">
          <ShoppingBag /><p>ADD TO CART</p>
          </div>
          <div className="wishlist">
            <Heart /><p>ADD TO WISHLIST</p>
          </div>
          <div className='details'>
            <p>Product Details</p>
            <ul>
              <div>
                {data.description.map((info,id) => <li key={id}>{info}</li>)}
              </div>
            </ul>
          </div>
          <div className="additional">
            <p>More Info</p>
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>}
    </div>
  )
}

export default Product
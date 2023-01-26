import React from 'react'
import { useState } from 'react'
import './Product.scss'
import { ChevronDown, Heart, ShoppingBag } from 'react-feather'
import useFetch from '../fetch'
import { useParams } from 'react-router-dom'

function Product() {
const varient = ['XS','S','M','L','XL'];
const description = [<p>Extra Small <span>(XS)</span></p>,<p>Small <span>(S)</span></p>,<p>Medium <span>(M)</span></p>,<p>Large <span>(L)</span></p>,<p>Extra Large <span>(XL)</span></p>];
const [sizetext, setsizetext] = useState('Select Size');
const [size,setsize] = useState(null)

const {id} = useParams();
const [image,setimage] = useState(0);
const [quantity,setquantity]  = useState(0);
const [data] = useFetch('/product/'+id);

  return (
    <div>
    { data && 
    <div className='product'>
      <div className="left">
        <div className="array">
          {data.images?.map((img,id) => <img src={img} key={id} alt=""  onClick={()=>setimage(id)}/>)}
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
            {data.oldprice && <p className='old'>MRP <span>₹{data.oldprice}</span></p>}
            <p>{data.oldprice && <span className='discount'>({Math.round(100*((data.oldprice-data.price)/data.oldprice))}% OFF)</span>}</p>
          </div>
          <div className='size'>
            {sizetext}
            <div>
              {varient.map((type,id)=> <button key={id} className={type === size ? 'active' : ''} onClick={(e)=>{setsizetext(description[id]);setsize(varient[id]);}}>{type}</button>)}
            </div>
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
          {data.description && <div className='details'>
            <p>Product Details</p>
            <ul>
              <div>
                {data.description?.map((info,id) => <li key={id}>{info}</li>)}
              </div>
            </ul>
          </div>}
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
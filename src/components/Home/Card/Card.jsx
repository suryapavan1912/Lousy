import React from 'react'
import { NavLink } from 'react-router-dom'
import './Card.scss'

function Card(props) {
  return (
      <NavLink target="_blank" to={`/products/${props.product.id}`}>
        <div  className='card'>
          <div className="image">
            {props.product.exclusive && <span>Exclusive</span>}
            <img className='main' src={props.product.images[0]} alt="" />
            <img src={props.product.images[1]} alt="" />
          </div>
            <p className="brand">{props.product.brand}</p>
            <p className='title'>{props.product.title}</p>
          <div className='prices'>
            <p className='new'>₹{props.product.price}</p>
            {props.product.oldprice && <p className='old'>₹{props.product.oldprice}</p>}
            <p>{props.product.oldprice && <span className='discount'>{Math.round(100*((props.product.oldprice-props.product.price)/props.product.oldprice))}% off</span>}</p>
          </div>
        </div>
      </NavLink>
  )
}

export default Card

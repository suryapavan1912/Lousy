import React from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown, Heart, Search , ShoppingCart , User } from 'react-feather';
import './Navbar.scss'
import { useState } from 'react';
import Cart from '../Cart/Cart';
function Navbar() {

  const [cart,setcart] = useState(false)

  return (
      <>
      <div className='nav'>
        <div className='left'>
          <div className='arrows'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png' alt='' />
            <ChevronDown />
          </div>
          <div className='arrows'>
            <p>USD</p><ChevronDown />
          </div>
          <NavLink to='/products?gender=Men'>Men</NavLink>
          <NavLink to='/products?gender=Women'>Women</NavLink>
          <NavLink to='/products?gender=Children'>Children</NavLink>
          <NavLink to='/products?type=Accessories'>Accessories</NavLink>
        </div>
        <div className='center'>
          <p>LOUSY</p>
        </div>
        <div className='right'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>About</NavLink>
          <NavLink to='/'>Contact</NavLink>
          <NavLink to='/'>stores</NavLink>
          <div className='icons'>
            <Search />
            <User />
            <Heart />
            <div className='divcon'>
              <ShoppingCart onClick={()=>{setcart(!cart)}}/>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
      {cart && <Cart />}
      </>
    
  )
}

export default Navbar
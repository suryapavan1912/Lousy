import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ChevronDown, Heart, Search , ShoppingCart , User } from 'react-feather';
import './Navbar.scss'
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { auth } from '../../firebase';
import Signin from '../SignIn/Signin';

function Navbar() {

  const [cart,setcart] = useState(false)
  const navigate = useNavigate()

  return (
      <>
      <Signin />
      <div className='nav'>
        <div className='left'>
          <div className='arrows'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png' alt='' />
            <ChevronDown />
          </div>
          <div className='arrows'>
            <p>USD</p><ChevronDown />
          </div>
          <NavLink to='/products?type=clothing&gender=Men'>Men</NavLink>
          <NavLink to='/products?type=clothing&gender=Women'>Women</NavLink>
          <NavLink to='/products?type=clothing&gender=Children'>Children</NavLink>
          <NavLink to='/products?type=Accessories'>Accessories</NavLink>
        </div>
        <div className='center'>
          <p>LOUSY</p>
        </div>
        <div className='right'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>About</NavLink>
          <NavLink to='/'>Contact</NavLink>
          <NavLink to='/'>Stores</NavLink>
          <div className='icons'>
            <Search />
            <div className='signout'>
              <User />
              <div className="dropdown">
                <p onClick={()=>{auth.signOut()}}>Sign out</p>
              </div>
            </div>
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
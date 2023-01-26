import React from 'react'
import './Gridbox.scss'
import { NavLink } from 'react-router-dom'

function Gridbox() {
  return (
    <div className="gridbox">
        <div className="col">
          <div className="row">
            <img src='https://images.pexels.com/photos/10123270/pexels-photo-10123270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            <NavLink to='/products'>Sale</NavLink>
          </div>
          <div className="row">
            <img src='https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            <NavLink to='/products?gender=Women'>Women</NavLink>
          </div>
        </div>
        <div className="col">
          <img src='https://images.pexels.com/photos/8471827/pexels-photo-8471827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
          <NavLink to='/products?gender=Children'>Kids</NavLink>
        </div>
        <div className="col-large">
          <div className="row">
            <div className="col">
              <img src='https://images.pexels.com/photos/8680099/pexels-photo-8680099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
              <NavLink to='/products?gender=Men'>Men</NavLink>
            </div>
            <div className="col">
              <img src='https://images.pexels.com/photos/4226866/pexels-photo-4226866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
              <NavLink to='/products?type=Accessories'>Accessories</NavLink>
            </div>
          </div>
          <div className="row">
            <img src='https://images.pexels.com/photos/1449844/pexels-photo-1449844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            <NavLink to='/'>Shoes</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Gridbox
import React, { useState } from 'react'
import './Products.scss'
import Card from '../Home/Card/Card'
import useFetch from '../fetch'

function Products() {

const images = ["https://images.pexels.com/photos/7081105/pexels-photo-7081105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/13255965/pexels-photo-13255965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/5911467/pexels-photo-5911467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              ]

// price range

const [data] = useFetch('/products')


const [maxprice,setmaxprice] = useState(50000)

// price sorting

const [sort,setsort] = useState(null)


//set categories

let sorts =  ["Shirts","T-Shirts","Jackets","Jeans","Trousers"]

  return (
    <div className="products">
      <div className="left">
        <div className="filteritem">
          <h1>Gender</h1>
          <div className="inputitem"><input type="checkbox" id="Men"/><label htmlFor="Men">Men</label></div>
          <div className="inputitem"><input type="checkbox" id="Women" /><label htmlFor="Women">Women</label></div>
          <div className="inputitem"><input type="checkbox" id="Children" /><label htmlFor="Children">Children</label></div>
        </div>
        <div className="filteritem">
          <h1>Product Categories</h1>
          {sorts.map((item,id) => 
            <div className="inputitem" key={id}>
              <input type="checkbox" id={id} label={id} />
              <label htmlFor={id}>{item}</label>
            </div>)}
          </div>
        <div className="filteritem">
          <h1>Filter by price</h1>
          <div className="inputitem"><p>0</p><input type="range" min={0} max={50000} value={maxprice} onChange={(e)=>{setmaxprice(e.target.value)}}/><p>{maxprice}</p></div>
        </div>
        <div className="filteritem">
          <h1>Sort by</h1>
          <div className="inputitem"><input type="radio" name="radio" id="4" /><label htmlFor="4" onChange={e=>{setsort('acs')}}>Price(Lowest first)</label></div>
          <div className="inputitem"><input type="radio" name="radio" id="5" /><label htmlFor="5" onChange={e=>{setsort('dec')}}>Price(Highest first)</label></div>
        </div>
      </div>




      <div className="right">
        <div><img className='catimg' src={images[1]} alt="" /></div>
        <div className='contain'>
            {
            data && data
            .filter(item => maxprice>item.price)
            .map((item,id) => {return(<Card product={item} key={id} />)})
            }
        </div>
      </div>
    </div>
  )
}

export default Products
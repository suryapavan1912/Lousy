import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Filter from '../Filter/Filter'
import './Products.scss'

function Products() {

  const { category } = useParams()
  console.log(category);
  const [maxprice,setmaxprice] = useState(100000)
  const [sort,setsort] = useState(null)

let sorts
  
if (category === "Men"){sorts =  ["Shirts","T-Shirts","Jackets","Jeans","Trousers"]}
else if (category === "Women"){sorts =  ["Tops","Jumpsuits","Jackets","Jeans","Skirts"]}
else(sorts =  ["Shirts","T-Shirts","Jackets","Jeans","Trousers"])
  return (
    <div className="products">
      <div className="left">
        <div className="filteritem">
          <h1>Product Categories</h1>
          {sorts.map((item,id) => <div className="inputitem" key={id}><input type="checkbox" id='1' label={1} /><label htmlFor='1'>{item}</label></div>)}
        </div>
        <div className="filteritem">
          <h1>Filter by price</h1>
          <div className="inputitem"><p>0</p><input type="range" min={0} max={100000} value={maxprice} onChange={(e)=>{setmaxprice(e.target.value)}}/><p>{maxprice}</p></div>
        </div>
        <div className="filteritem">
          <h1>Sort by</h1>
          <div className="inputitem"><input type="radio" name="radio" id="4" /><label htmlFor="4" onChange={e=>{setsort('acs')}}>Price(Lowest first)</label></div>
          <div className="inputitem"><input type="radio" name="radio" id="5" /><label htmlFor="5" onChange={e=>{setsort('dec')}}>Price(Highest first)</label></div>
        </div>
      </div>
      <div className="right">
        <div><img className='catimg' src="https://images.pexels.com/photos/7081105/pexels-photo-7081105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
        <div className='contain'><Filter category={category} sort={sort} maxprice={maxprice} /></div>
      </div>
    </div>
  )
}

export default Products
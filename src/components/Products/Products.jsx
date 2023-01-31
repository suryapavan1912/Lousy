import React, { useEffect, useState } from 'react'
import './Products.scss'
import Card from '../Home/Card/Card'
import useFetch from '../fetch'
import { useSearchParams } from 'react-router-dom'


function Products() {

const banner = ["https://images.pexels.com/photos/7081105/pexels-photo-7081105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/13255965/pexels-photo-13255965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/5911467/pexels-photo-5911467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              ]

// fetch
const [selectedSubCats, setSelectedSubCats] = useState(null);
const [searchParams] = useSearchParams();

useEffect(() => {
  let filter = []
  for (const entry of searchParams.entries()) {
    filter.push(entry)
  setSelectedSubCats(filter)}
}, [searchParams]);

function handleChange(e){
  const value = e.target.value;
  const isChecked = e.target.checked;
  setSelectedSubCats(isChecked ? [...selectedSubCats,['category', value]] : selectedSubCats.filter((item) => item[1] !== value))}

let query = ''
for(let x=0;x<selectedSubCats?.length;x+=1){
  query = query + selectedSubCats[x][0] + '=' + selectedSubCats[x][1] + '&' }
console.log(query);
const [data] = useFetch(`/products?${query}`)

//price range
const [maxprice,setmaxprice] = useState(50000)

// price sorting


//set categories
let sorts
if (query.includes('Men')){ sorts = ["Shirts","T-shirts","Jackets","Jeans","Trousers"] } 
else if(query.includes('Women')){ sorts = ["Tops","Jumpsuits","Jackets","Jeans","Skirts"] }
else if(query.includes('Children')){sorts = ["Tops","Jumpsuits","Jackets","Jeans","Skirts"]}
else if(query.includes('Accessories')){ sorts = ["Watches","Ties","Belts","Shoes","Sunglasses"]}
else{sorts = ["Shirts","T-shirts","Tops","Jumpsuits","Jackets","Jeans","Trousers","Skirts"]}

  return (
    data &&
    <div className="products">
      <div className="left">
        <div className="filteritem">
          <h1>Product Categories</h1>
          {sorts.map((item,id) => <div className="inputitem" key={id} ><input type="checkbox" onClick={handleChange} id={item} value={item} name={item} /><label htmlFor={item}>{item}</label></div>)}
          </div>
        <div className="filteritem">
          <h1>Filter by price</h1>
          <div className="inputitem"><p>0</p><input type="range" min={0} max={50000} value={maxprice} onChange={(e)=>{setmaxprice(e.target.value)}}/><p>{maxprice}</p></div>
        </div>
        <div className="filteritem">
          <h1>Sort by</h1>
          <div className="inputitem"><input type="radio" name="radio" id="4" /><label htmlFor="4" >Price(Lowest first)</label></div>
          <div className="inputitem"><input type="radio" name="radio" id="5" /><label htmlFor="5" >Price(Highest first)</label></div>
        </div>
      </div>

      <div className="right">
        <div><img className='catimg' src={banner[1]} alt="" /></div>
        <div className='contain'>
            {data
            .filter(item => maxprice>item.price)
            .map((item,id) => {return(<Card product={item} key={id} />)})
            }
        </div>
      </div>
    </div>
  )
}

export default Products
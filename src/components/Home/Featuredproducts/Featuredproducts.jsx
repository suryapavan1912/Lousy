import React from 'react'
import './Featuredproducts.scss'
import Card from '../Card/Card'
import useFetch from '../../fetch'

function Featuredproducts(props) {

const [data] = useFetch('/products')

  return (
    <div>
    { data && 
    <div className='featuredproducts'>
        <div className='top'>
            <h1>{props.type} Products</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ab sequi nobis nulla, exercitationem possimus magni quia vel pariatur animi, quidem minus ullam quasi numquam repellendus quod sed. Ea, quisquam!
            Officiis voluptas.</p>
        </div>
        <div className="bottom">
            {props.type === "Featured" && data.filter((item,id)=> item.featured===true).filter((item,id)=> id<4).map((item,id) => {return(<Card product={item} key={id} />)})}
            {props.type === "Trending" && data.filter((item,id)=> item.trending===true).filter((item,id)=> id<4).map((item,id) => {return(<Card product={item} key={id} />)})}
        </div>
    </div>}
    </div>
  )
}

export default Featuredproducts
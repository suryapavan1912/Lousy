import React from 'react'
import Card from '../Home/Card/Card'
import useFetch from '../fetch'
function Filter(props) {

  const [data] = useFetch(props.category)
    
  return (
            data && data
            .filter(item => props.maxprice>item.price)
            .map((item,id) => {return(<Card product={item} key={id} />)})
  )
}

export default Filter



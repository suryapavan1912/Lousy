import React from 'react'
import Card from '../Home/Card/Card'
import useFetch from '../fetch'
function Wholeitems(props) {

  const [data] = useFetch()
    
  return (
            data && data.filter(item => props.maxprice>item.price).map((item,id) => {return(<Card product={item} key={id} />)})
  )
}

export default Wholeitems



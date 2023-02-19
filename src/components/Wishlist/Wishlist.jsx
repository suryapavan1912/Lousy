import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Add, userr } from '../../features/counter/counterSlice'
import './Wishlist.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from '../axios'

function Wishlist() {

    const userdata = useSelector(userr)
    const dispatch = useDispatch
    const [cartload,setcartload] = useState(false)
  const [carterror,setcarterror] =useState(false)

async function Deleteitem(id){
  try {
    setcartload(true);
    const updated = await axios.post('/deletewish',{id : userdata.id, product : id });
    console.log(updated.data);
    dispatch(Add(updated.data));
    setcartload(false);
    setcarterror(false);
  } catch (error) {
    setcarterror(true);
    console.log(error);
  }
}
    
  return (
    <>
    {(cartload || !userdata) && <div className="loading"><p>loading</p></div>}
    
    {carterror && <div className="error"><p>Network Error. Please Try Reloading The Page.</p></div>}
    {
    userdata?.wishlist.length>0 ?
    <div className="wishlist">
      <div className="heading"><p>Your Wishlist</p></div>
      <div className="array">
        {
          userdata?.wishlist?.map(item => {return(
            <NavLink key={item.id} to={`/product/${item.id}`}>
        <div  className='card'>
          <div className="image">
            <img className='main' src={item.info.image} alt="" />
            <div className="deleteicon" onClick={()=>{Deleteitem(item.id)}}><DeleteOutlineIcon /></div>
          </div>
            <p className="brand">{item.info.brand}</p>
            <p className='title'>{item.info.title}</p>
          <div className='prices'>
            <p className='new'>₹{item.info.price}</p>
            {item.info.oldprice && <p className='old'>₹{item.info.oldprice}</p>}
            <p>{item.info.oldprice && <span className='discount'>{Math.round(100*((item.info.oldprice-item.info.price)/item.info.oldprice))}% off</span>}</p>
          </div>
        </div>
      </NavLink>
          )})
        }
        </div>
    </div>
    :
    <div className='emptywishlist'>
            <h1>Your Wishlist is Empty</h1>
            <NavLink to='/' className='doshop'>CONTINUE SHOPPING</NavLink>
    </div>
    }
    </>
  )
}

export default Wishlist
import React from 'react'
import { Trash2 } from 'react-feather'
import './Cart.scss'

function Cart() {

    const data = [
        {
        id: 1,
        img: "https://images.pexels.com/photos/4456157/pexels-photo-4456157.jpeg?auto=compress&cs=tinysrgb&dpr=1",
        img2:"https://images.pexels.com/photos/4456158/pexels-photo-4456158.jpeg?auto=compress&cs=tinysrgb&dpr=1",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
        },
        {
        id: 2,
        img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs-tinys rgb&w=1600",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12,
        }]

  return (
    <div className="maincart">
        <h1>Products in your cart</h1>

            {data.map((item,id)=>{return(
                <div className="items" key={id}>
                <div className='img'>
                    <img src={item.img} alt="" />
                </div>
                <div className='info'>
                    <p className='title'>{item.title}</p>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rerum! Quisquam natus culpa eveniet.</p>
                    <p className='price'>1 x ${item.price}</p>
                </div>
                <div className='del'>
                    <Trash2 />
                </div>
                </div>
            )})}

        <div className="total">
            <p>SUBTOTAL</p>
            <p>${data[0].price}</p>
        </div>
        <button className='checkout'>PROCEED TO CHECKOUT</button>
        <p className="reset">Reset Cart</p>
    </div>
  )
}

export default Cart

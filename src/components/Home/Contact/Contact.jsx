import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather'
import './Contact.scss'
function Contact() {
  return (
    <div className='contact'>
        <div className="wraper">
            <div>
                <p>BE IN TOUCH WITH US:</p>
            </div>
            <div>
                <form>
                <input type="text" placeholder='Enter your e-mail'/>
                <button>JOIN US</button>
                </form>
            </div>
            <div className='social'>
                <p><Facebook/></p>
                <p><Instagram/></p>
                <p><Twitter/></p>
                <p><Linkedin/></p>
            </div>
        </div>
    </div>
  )
}

export default Contact
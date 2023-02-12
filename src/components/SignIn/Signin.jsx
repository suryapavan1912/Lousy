import React, { useEffect, useRef, useState } from 'react'
import { AlertCircle } from 'react-feather'
import { auth } from '../../firebase'
import './Signin.scss'

function Signin() {
    const [login,setlogin] = useState(true)
    const [error,seterror] = useState(null)
    const [newuser,setnewuser] = useState(false)
    const user = useRef(null)
    const password = useRef(null)
    const passwordc = useRef(null)
  
    useEffect(()=>{
    auth.onAuthStateChanged(user => {
    if (user) {
      setlogin(true)
    } else {
      setlogin(false)
    }
    });
    },[login]);
    
    function Signup(event){
      event.preventDefault()
      if(password.current.value === passwordc.current.value){
      auth.createUserWithEmailAndPassword(user.current.value,password.current.value)
      .then((userCredential) => {
        setlogin(true);
        seterror(null)
      })
      .catch((err) => {
        if(err.message === 'Firebase: The email address is badly formatted. (auth/invalid-email).'){
          seterror('The email is badly formatted')
        }
        else if(err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
          seterror('Password should be at least 6 characters')
        }
        else if(err.message === 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).'){
          seterror('The email is already in use');
        }
        else{
          seterror(null)
        }
      })}
      else{
        seterror("Passwords didn't match. Try again.")
      }
    }
    
    function Login(event){
      event.preventDefault()
      auth.signInWithEmailAndPassword(user.current.value,password.current.value)
      .then((userCredential) => {
        setlogin(true);seterror(null)
      })
      .catch((err) => {
        if(err.message === 'Firebase: The email address is badly formatted. (auth/invalid-email).'){
          seterror('The email address is badly formatted')
        }
        else if(err.message === 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).'){
          seterror('Wrong password. Try again.')
        }
        else if(err.message === 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).'){
          seterror("Couldn't find your account")
        }
        else{
          seterror(null)
        }
        console.log(error);
      });
    }
    
  return (
    <div className = 'login' style={login?{display:'none'}:{display:'flex'}}>
        <div className='container'>
        {newuser ?
        <form onSubmit={Signup}>
        <h1 >SIGN UP</h1>
        {error&&<div className='error'><AlertCircle/><h4>{error}</h4></div>}
        <h2>Email</h2>
        <input type='email' placeholder='Type your email' autoComplete="email" ref={user} required/>
        <input type='text' autoComplete="username" hidden/>

        <h2>Password</h2>
        <input type='password' placeholder='Set a password' autoComplete="new-password" ref={password} required/>
        <h2>Confirm Password</h2>
        <input type='password' placeholder='Enter password' autoComplete="new-password" ref={passwordc} required/>
        <button>Sign Up</button>
        <p>Already a member? <span onClick={()=>{setnewuser(false);seterror(null)}}>Login</span>.</p>
        </form>
        :
        <form onSubmit={Login}>
        <h1>LOGIN</h1>
        {error&&<div className='error'><AlertCircle/><h4>{error}</h4></div>}
        <h2>Email</h2>
        <input type='email' placeholder='Type your email' autoComplete="email" ref={user} required/>
        <h2>Password</h2>
        <input type='password' placeholder='Type your password' autoComplete="current-password" ref={password} required/>
        <button>LogIn</button>
        <p>New to Lousy? <span onClick={()=>{setnewuser(true);seterror(null)}}>Sign Up now</span>.</p>
        </form>
        }
        </div>
    </div>
  )
}

export default Signin
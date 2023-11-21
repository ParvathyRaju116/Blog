import Button from 'react-bootstrap/Button';
import React from 'react'

import {auth,provider}from '../firebase-confiq'
import {  getAuth, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {



  const navigate=useNavigate();

  const signInWithGoogle=()=>{
   signInWithPopup(auth,provider).then((result)=>{
    localStorage.setItem("isAuth",true)
      setIsAuth(true)
      navigate('/post')
   })
  }

  
 

 

  return (
    <div className='loginPage text-center mt-5 pt-5' style={{height:'550px'}}>
      <h1 className='m-4'>Login</h1>
      <Button  className='login-with-google-btn bg-white text-black   btn1' onClick={signInWithGoogle}><img src="https://i.postimg.cc/DZG1G0YZ/GOOG-0ed88f7c-removebg-preview.png" style={{height:'30px',width:'30px'}} alt="" /> Sign in with Google</Button>{' '}


    </div>
  )
}

export default Login
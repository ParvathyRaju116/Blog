import { signOut } from 'firebase/auth';
import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-confiq';




function Header({isAuth,setIsAuth}) {

    const navigate = useNavigate()

const signUserOut =()=>{
    signOut(auth).then(()=>{
        localStorage.clear()
        setIsAuth(false)
        navigate("/")
    })
}

  return (
    <div className='p-3'>
         <Navbar expand="lg" style={{backgroundColor:'transparent'}}>
      <Container>
        <Navbar.Brand href="#home" className='brand fs-2'>
          <img src="https://i.postimg.cc/1z5yc3Gy/images-1-removebg-preview.png" style={{height:'50px',width:'50px'}} alt="" />
             <span className='ms-2'><b>S</b>QUARE<b> S</b>PACE</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
          <Link style={{textDecoration:'none'}} className='link me-3 text-black mt-1 fw-1' to={'/'}>Home</Link>

            <Link style={{textDecoration:'none'}} className='link me-3 text-black mt-1 fw-1' to={'/post'}>Post</Link>
            {!isAuth ? (<Link style={{textDecoration:'none'}}  className='link text-black fw-1 mt-1' to={'/Login'}>Login</Link>):
            (
            <>
               <Link style={{textDecoration:'none'}}  className='link me-3 text-black fw-1 mt-1' to={'createpost'}>Create Post</Link>
                <Button onClick={signUserOut} className='btn1'>Log Out</Button>
            </>)}

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
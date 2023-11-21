import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Login from './Pages/Login'
import CreatePost from './Pages/CreatePost'
import Header from './Components/Header';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer';







function App() {

  const[isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"))

  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth}/>

      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
       <Route path='/post' element={<Home  isAuth={isAuth}></Home>} ></Route>
       <Route path='/createpost' element={<CreatePost isAuth={isAuth}></CreatePost>}></Route>
       <Route path='/login' element={<Login setIsAuth={setIsAuth}></Login>}></Route>
       <Route path='/register' element={<Login regiter></Login>}></Route>

      </Routes>
     <Footer/>
     
    </div>
  );
}

export default App;

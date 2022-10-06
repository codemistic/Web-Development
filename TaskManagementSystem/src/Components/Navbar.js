import React ,{useEffect,useState}from 'react'
import {BrowserRouter,Routes,Route,Link,useLocation, Navigate,useNavigate} from "react-router-dom";




function Navbar() {
  let location = useLocation();
  // useEffect(()=>{
  //   console.log(location)
  //   },[location])

const [shown,setShown] = useState(true);
const navigate = useNavigate();

useEffect(()=>{
  if(location.pathname == '/login'|| location.pathname == '/signup' )
  {
    setShown(false);
  }
  else{
    setShown(true);
  }
})

  const handleOnClick=()=>{

    if(localStorage.getItem('token'))
    {
      localStorage.setItem('token',null)
      navigate('/login')
      
     
    }
    else
    {
      navigate('/login')
    }

  }

  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" >TaskinglyPro</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""} `} style={{display: shown ? 'block' : 'none'}}aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""} `} style={{display: shown ? 'block' : 'none'}} to="/about">About</Link>
        </li>
       
       
      </ul>
      <form className="d-flex" role="search">
        <button className='btn btn-primary mx-2'style={{display: shown ? 'block' : 'none'}}  onClick={handleOnClick} role="button">Logout</button>
        {/* <Link className='btn btn-primary mx-2' to='/signup' role="button">Sign-up</Link> */}
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

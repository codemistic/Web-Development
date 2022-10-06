import React,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom"

function Signup() {
  const navigate = useNavigate();
  const [credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""});

  const handleOnChange=(e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value})
}

const validate = async() =>{
  const resp = await fetch(`http://localhost:5000/api/auth/createUser`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
        body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
          });
          const json = await resp.json();

          if(json.success){
              localStorage.setItem('token',json.authtoken)
              navigate('/login')
          }
          else{
          alert("please enter in valid formats")
          }
}

const handleOnSubmit=(e)=>{
  e.preventDefault();
  
  if(credentials.password == credentials.cpassword)
  { 
    validate();
  }
  else
  {
    alert("passwords dont match")
  }

  
}

  return (
    // <section  style={{backgroundColor:"orange",maxHeight:"100vh",maxWidth:"100vw"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100" style={{margin:"0em"}}>
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black"  style={{borderRadius:"25px",display:"flex",justifyContent:"center"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center" >
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={handleOnSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="name" onChange={handleOnChange} name="name" className="form-control" />
                      <label className="form-label" htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" onChange={handleOnChange} name="email" className="form-control" />
                      <label className="form-label" htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="password" onChange={handleOnChange} name="password" className="form-control"minLength={5} required />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="cpassword" onChange={handleOnChange} name="cpassword" className="form-control"minLength={5} required />
                      <label className="form-label" htmlFor="cpassword">Repeat your password</label>
                    </div>
                  </div>

                 <Link to = "/login"><a >Already a user? click to Login</a></Link>

                  <div className="d-flex justify-content-center mx-4 my-4 mb-3 mb-lg-4">
                    <button  type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
// </section>
  )
}

export default Signup

import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';

function Login() {

    const [credentials,setCredentials] = useState({email:"",password:""});
    let navigate = useNavigate ();
    const handleOnChange=(e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const resp = await fetch(`http://localhost:5000/api/auth/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
              body: JSON.stringify({email:credentials.email,password:credentials.password})
                });
                const json = await resp.json();
                // console.log(json)

                if(json.success){
                    localStorage.setItem('token',json.authToken)
                    navigate('/')
                }
                else{
                alert("invalid credentials")
                }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={handleOnChange} value={credentials.email} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" >Password</label>
                    <input type="password" onChange={handleOnChange} value={credentials.password} className="form-control" id="password" name="password" />
                </div>

                 <div >
                    <button type="submit" className="btn btn-primary" >Login</button>
                    <Link to="/signup" style={{marginLeft:"20px"}}><a >New User? Click here to Signup</a></Link>
                    </div>
                
            </form>
        </div>
    )
}

export default Login

import React,{useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import AddNote from './AddNote';
import Notes from './Notes';
function Home() {
  const navigate = useNavigate();

  useEffect(()=>{
    if((localStorage.getItem('token').length)<5)
    {
      console.log()
      navigate('/login');
    }
    else{
      console.log(localStorage.getItem('token').length)
      navigate('/');
    }
  },[localStorage.getItem('token')])
 
  return (
   
    <div >
  
    {/* <AddNote/> */}
    <Notes/>
    </div>
  )
}

export default Home

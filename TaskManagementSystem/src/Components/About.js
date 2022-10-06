import React,{useContext,useEffect} from 'react'
import NoteContext from '../Context/notes/NoteContext'
import { useNavigate } from 'react-router-dom';

  

function About() {
  const navigate = useNavigate();

  useEffect(()=>{
    if((localStorage.getItem('token').length)<20)
    {
      navigate('/login');
    }
    else{
      navigate('/about');
    }
  },[])

  return (
    <div>
       <h1>this is about </h1>
    </div>
  )
}

export default About
